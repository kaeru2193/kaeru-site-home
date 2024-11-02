import * as fs from "fs";
import path from "path";

import paths from "./processPaths";

export function getBlogMap() { //ブログのマップ作成
    const articles = fs.readdirSync(paths.blogPath)
        .filter(p => fs.statSync(path.join(paths.blogPath, p)).isDirectory())

    const articleMetas = articles
        .map(articleID => {
            if (!fs.statSync(path.join(paths.blogPath, articleID)).isDirectory()) {return ""}
            const articlePath = path.join(paths.blogPath, articleID, './page.mdx')
            if (fs.existsSync(articlePath)) {
                return metaExtractor(articlePath, articleID)
            } else {
                throw Error(`記事が存在しません: ${articleID}`)
            }
        })
        .reduce((pre, now) => pre + "\n" + now)
    
    fs.mkdirSync(paths.tmpPath, { recursive: true })
    fs.writeFileSync(path.join(paths.tmpPath, "./blogmap.ts"), articleMetas) //一時ファイルに書き出し

    const metas = require(path.join(paths.tmpPath, "./blogmap.ts")) //通常のモジュールとして読み込み
    const blogMap = articles.map(id => {
        return {
            id: id,
            data: metas["meta" + id]
        }
    })

    fs.rmSync(paths.tmpPath, { recursive: true }) //一時ディレクトリを削除

    const sorted = blogMap.sort((a, b) => b.data.date - a.data.date) //日時を降順に並び替え
    return sorted
}

const metaExtractor = (path: string, id: string) => {
    const content = fs.readFileSync(path, "utf-8")
    const metaExportRegex = /export\s+const\s+meta\s*=\s*({[\s\S]*?});/
    const meta = content.match(metaExportRegex)

    if (!meta) {
        // metaが無ければ空オブジェクトを返す
        return 'const meta = {};'
    }

    return `exports.meta${id} = ${meta[1]};`
}

export function getSiteMap(blogmap: any[]) { //全ページのマップ生成
    const folderPaths: any[] = getFolderPaths(paths.directoryPath)
        .map(p => {
            const replacedP = p.replace(/\\/g, "/")
            const route = replacedP.split("app/")[1].split("/").filter(d => {
                return !d.match(/^\(.*\)$/)
            })
            return {
                path: replacedP,
                route: route
            }
        })
        .filter(p => {
            return !p.route.some(d => d.match(/^\[.*\]$/)) && p.route[0]
        })
        .map(p => {
            if (p.route.some(f => f.startsWith("_"))) { //隠しディレクトリはマッピングしない
                console.log("excluded: " + p.path)
                return null
            } else if (p.path.startsWith(paths.blogPath.replace(/\\/g, "/"))) {
                return {
                    route: p.route.join("/"),
                    title: blogmap.find(a => a.id == p.route[p.route.length - 1])?.data.title
                }
            } else if (fs.existsSync(path.join(p.path, './page.tsx'))) {
                const data = fs.readFileSync(path.join(p.path, './page.tsx'), "utf-8")
                const title = data.match(/.*?<\s*h1.*?>(.+)<\s*\/\s*h1>/)
                if (!title) {
                    throw Error(`h1タグ取得失敗: ${p}`)
                }
                return {
                    route: p.route.join("/"),
                    title: title[1]
                }
            } else if (fs.existsSync(path.join(p.path, './page.mdx'))) {
                const data = fs.readFileSync(path.join(p.path, './page.mdx'), "utf-8")
                const title = data.match(/^([\s\S]*?\n)?#(?!#)\s*(.+)\s*\n/)
                if (!title) {
                    throw Error(`h1見出し取得失敗: ${p.path}`)
                }
                return {
                    route: p.route.join("/"),
                    title: title[2]
                }
            } else {
                return null
                throw Error(`page本体が存在しません: ${p.path}`)
            }
        }).filter(p => p)
    return folderPaths
}

function getFolderPaths(dir: string, folderList: string[] = []) {
    const files = fs.readdirSync(dir);

    files.forEach((file: string) => {
        const filePath = path.join(dir, file);

        if (fs.statSync(filePath).isDirectory()) {
            folderList.push(filePath);
            getFolderPaths(filePath, folderList);
        }
    });

    return folderList;
}

export function getXMLMap(sitemap: any[]) { //サイトマップ(XML)生成
    const pageXML: string = sitemap.reduce((pre, p) => {
        return pre +
            `
        <url>
            <loc>https://kaeru2193.net/${p.route}</loc>
        </url>`
    }, "")
    
    const XML = 
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${pageXML}
    </urlset>`

    return XML
}