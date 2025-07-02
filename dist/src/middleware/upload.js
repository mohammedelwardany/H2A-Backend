"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = require("../config/multer");
const multer_2 = __importDefault(require("multer"));
exports.upload = (0, multer_2.default)({
    storage: multer_1.storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
    fileFilter: multer_1.fileFilter,
});
//# sourceMappingURL=upload.js.map