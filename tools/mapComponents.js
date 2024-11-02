"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getXMLMap = exports.getSiteMap = exports.getBlogMap = void 0;
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const processPaths_1 = __importDefault(require("./processPaths"));
function getBlogMap() {
    const articles = fs.readdirSync(processPaths_1.default.blogPath)
        .filter(p => fs.statSync(path_1.default.join(processPaths_1.default.blogPath, p)).isDirectory());
    const articleMetas = articles
        .map(articleID => {
        if (!fs.statSync(path_1.default.join(processPaths_1.default.blogPath, articleID)).isDirectory()) {
            return "";
        }
        const articlePath = path_1.default.join(processPaths_1.default.blogPath, articleID, './page.mdx');
        if (fs.existsSync(articlePath)) {
            return metaExtractor(articlePath, articleID);
        }
        else {
            throw Error(`記事が存在しません: ${articleID}`);
        }
    })
        .reduce((pre, now) => pre + "\n" + now);
    fs.mkdirSync(processPaths_1.default.tmpPath, { recursive: true });
    fs.writeFileSync(path_1.default.join(processPaths_1.default.tmpPath, "./blogmap.ts"), articleMetas); //一時ファイルに書き出し
    const metas = require(path_1.default.join(processPaths_1.default.tmpPath, "./blogmap.ts")); //通常のモジュールとして読み込み
    const blogMap = articles.map(id => {
        return {
            id: id,
            data: metas["meta" + id]
        };
    });
    fs.rmSync(processPaths_1.default.tmpPath, { recursive: true }); //一時ディレクトリを削除
    const sorted = blogMap.sort((a, b) => b.data.date - a.data.date); //日時を降順に並び替え
    return sorted;
}
exports.getBlogMap = getBlogMap;
const metaExtractor = (path, id) => {
    const content = fs.readFileSync(path, "utf-8");
    const metaExportRegex = /export\s+const\s+meta\s*=\s*({[\s\S]*?});/;
    const meta = content.match(metaExportRegex);
    if (!meta) {
        // metaが無ければ空オブジェクトを返す
        return 'const meta = {};';
    }
    return `exports.meta${id} = ${meta[1]};`;
};
function getSiteMap(blogmap) {
    const folderPaths = getFolderPaths(processPaths_1.default.directoryPath)
        .map(p => {
        const replacedP = p.replace(/\\/g, "/");
        const route = replacedP.split("app/")[1].split("/").filter(d => {
            return !d.match(/^\(.*\)$/);
        });
        return {
            path: replacedP,
            route: route
        };
    })
        .filter(p => {
        return !p.route.some(d => d.match(/^\[.*\]$/)) && p.route[0];
    })
        .map(p => {
        if (p.route.some(f => f.startsWith("_"))) { //隠しディレクトリはマッピングしない
            console.log("excluded: " + p.path);
            return null;
        }
        else if (p.path.startsWith(processPaths_1.default.blogPath.replace(/\\/g, "/"))) {
            return {
                route: p.route.join("/"),
                title: blogmap.find(a => a.id == p.route[p.route.length - 1])?.data.title
            };
        }
        else if (fs.existsSync(path_1.default.join(p.path, './page.tsx'))) {
            const data = fs.readFileSync(path_1.default.join(p.path, './page.tsx'), "utf-8");
            const title = data.match(/.*?<\s*h1.*?>(.+)<\s*\/\s*h1>/);
            if (!title) {
                throw Error(`h1タグ取得失敗: ${p}`);
            }
            return {
                route: p.route.join("/"),
                title: title[1]
            };
        }
        else if (fs.existsSync(path_1.default.join(p.path, './page.mdx'))) {
            const data = fs.readFileSync(path_1.default.join(p.path, './page.mdx'), "utf-8");
            const title = data.match(/^([\s\S]*?\n)?#(?!#)\s*(.+)\s*\n/);
            if (!title) {
                throw Error(`h1見出し取得失敗: ${p.path}`);
            }
            return {
                route: p.route.join("/"),
                title: title[2]
            };
        }
        else {
            return null;
            throw Error(`page本体が存在しません: ${p.path}`);
        }
    }).filter(p => p);
    return folderPaths;
}
exports.getSiteMap = getSiteMap;
function getFolderPaths(dir, folderList = []) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path_1.default.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            folderList.push(filePath);
            getFolderPaths(filePath, folderList);
        }
    });
    return folderList;
}
function getXMLMap(sitemap) {
    const pageXML = sitemap.reduce((pre, p) => {
        return pre +
            `
        <url>
            <loc>https://kaeru2193.net/${p.route}</loc>
        </url>`;
    }, "");
    const XML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${pageXML}
    </urlset>`;
    return XML;
}
exports.getXMLMap = getXMLMap;
