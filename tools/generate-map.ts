import * as fs from "fs";
import path from "path";

import paths from "./processPaths";

import { getBlogMap } from "./mapComponents";
import { getSiteMap } from "./mapComponents";
import { getXMLMap } from "./mapComponents";
import { getGalleryMap } from "./mapComponents";

const blogMaps = getBlogMap(paths.blogPaths)
fs.writeFileSync(path.join(paths.blogPaths[0], "../articles.json"), JSON.stringify(blogMaps[0], null, 2))
fs.writeFileSync(path.join(paths.blogPaths[1], "../articles.json"), JSON.stringify(blogMaps[1], null, 2))
console.log("blogmap generated")

const siteMap = getSiteMap(blogMaps.flat())
fs.writeFileSync("./app/pageMap.json", JSON.stringify(siteMap, null, 2))
console.log("sitemap generated")

const XMLMap = getXMLMap(siteMap)
fs.writeFileSync("./app/sitemap.xml", XMLMap)
console.log("xml sitemap generated")

/* ギャラリーはローカル環境で手動で生成
const galleryMap = getGalleryMap()
fs.writeFileSync("./app/(layout)/(ja)/download/gallery/gallery.json", JSON.stringify(galleryMap, null, 2))
console.log("gallery map generated")
*/