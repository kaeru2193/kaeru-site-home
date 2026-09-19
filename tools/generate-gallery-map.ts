import * as fs from "fs";
import { getGalleryMap } from "./mapComponents";

const galleryMap = getGalleryMap()
fs.writeFileSync("./app/(layout)/(ja)/download/gallery/gallery.json", JSON.stringify(galleryMap, null, 2))
console.log("gallery map generated")