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
const processPaths_1 = __importDefault(require("./processPaths"));
const mapComponents_1 = require("./mapComponents");
const mapComponents_2 = require("./mapComponents");
const mapComponents_3 = require("./mapComponents");
const blogMap = (0, mapComponents_1.getBlogMap)();
fs.writeFileSync(path_1.default.join(processPaths_1.default.blogPath, "../articles.json"), JSON.stringify(blogMap, null, 2));
console.log("blogmap generated");
const siteMap = (0, mapComponents_2.getSiteMap)(blogMap);
fs.writeFileSync("./app/pageMap.json", JSON.stringify(siteMap, null, 2));
console.log("sitemap generated");
const XMLMap = (0, mapComponents_3.getXMLMap)(siteMap);
fs.writeFileSync("./app/sitemap.xml", XMLMap);
console.log("xml sitemap generated");
