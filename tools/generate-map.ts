import * as fs from "fs";
import path from "path";

import paths from "./processPaths";

import { getBlogMap } from "./mapComponents";
import { getSiteMap } from "./mapComponents";
import { getXMLMap } from "./mapComponents";

const blogMap = getBlogMap()
fs.writeFileSync(path.join(paths.blogPath, "../articles.json"), JSON.stringify(blogMap, null, 2))
console.log("blogmap generated")

const siteMap = getSiteMap(blogMap)
fs.writeFileSync("./app/pageMap.json", JSON.stringify(siteMap, null, 2))
console.log("sitemap generated")

const XMLMap = getXMLMap(siteMap)
fs.writeFileSync("./app/sitemap.xml", XMLMap)
console.log("xml sitemap generated")