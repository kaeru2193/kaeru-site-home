"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const processPaths = {
    directoryPath: path_1.default.join(process.cwd(), './app'),
    blogPath: path_1.default.join(process.cwd(), './app/(layout)/ikenolog/(articles)'),
    tmpPath: path_1.default.join(process.cwd(), './tools/.tmp')
};
exports.default = processPaths;
