import * as fs from "fs";
import path from "path";

const processPaths = {
    directoryPath: path.join(process.cwd(), './app'),
    blogPaths: [
        path.join(process.cwd(), './app/(layout)/(ja)/ikenolog/(articles)'),
        path.join(process.cwd(), './app/cuangnem/(articles)')
    ],
    galleryPath: path.join(process.cwd(), './public/gallery'),
    tmpPath: path.join(process.cwd(), './tools/.tmp'),
}

export default processPaths