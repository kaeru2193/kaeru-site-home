import * as fs from "fs";
import path from "path";

const processPaths = {
    directoryPath: path.join(process.cwd(), './app'),
    blogPath: path.join(process.cwd(), './app/(layout)/ikenolog/(articles)'),
    tmpPath: path.join(process.cwd(), './tools/.tmp')
}

export default processPaths