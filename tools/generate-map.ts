import * as fs from "fs";
import path from "path";

//全ページのマップ生成
const directoryPath = path.join(process.cwd(), './app');

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

const folderPaths: any[] = getFolderPaths(directoryPath)
    .map(p => {
        const route = p.split("app\\")[1].split("\\").filter(d => {
            return !d.match(/^\(.*\)$/)
        })
        return {
            path: p,
            route: route
        }
    })
    .filter(p => {
        return !p.route.some(d => d.match(/^\[.*\]$/)) && p.route[0]
    })
    .map(p => {
        if (p.path.split("\\").some(f => f.startsWith("_"))) {
            console.log(p.path)
            return null
        }
        if (fs.existsSync(path.join(p.path, './page.tsx'))) {
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

fs.writeFileSync("./app/pageMap.json", JSON.stringify(folderPaths, null, 2))
console.log("pagemap generated")

//サイトマップ生成
const pageXML: string = folderPaths.reduce((pre, p) => {
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

fs.writeFileSync("./app/sitemap.xml", XML)
console.log("sitemap generated")