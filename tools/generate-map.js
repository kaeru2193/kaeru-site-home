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
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
//全ページのマップ生成
const directoryPath = path_1.default.join(process.cwd(), './app');
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
const folderPaths = getFolderPaths(directoryPath)
    .map(p => {
    const route = p.split("app/")[1].split("/").filter(d => {
        return !d.match(/^\(.*\)$/);
    });
    return {
        path: p,
        route: route
    };
})
    .filter(p => {
    return !p.route.some(d => d.match(/^\[.*\]$/)) && p.route[0];
})
    .map(p => {
    if (p.route.some(f => f.startsWith("_"))) {
        console.log("excluded: " + p.path);
        return null;
    }
    if (fs.existsSync(path_1.default.join(p.path, './page.tsx'))) {
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
fs.writeFileSync("./app/pageMap.json", JSON.stringify(folderPaths, null, 2));
console.log("pagemap generated");
//サイトマップ生成
const pageXML = folderPaths.reduce((pre, p) => {
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
fs.writeFileSync("./app/sitemap.xml", XML);
console.log("sitemap generated");
