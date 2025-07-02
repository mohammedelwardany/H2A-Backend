"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = exports.storage = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const CustomError_1 = __importDefault(require("../errors/CustomError"));
exports.storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        const folderName = req.body.name;
        if (folderName) {
            const dir = path_1.default.join(__dirname, '../../public/images', folderName);
            fs_1.default.mkdir(dir, { recursive: true }, (err) => {
                if (err) {
                    return cb(err, '');
                }
                cb(null, dir);
            });
        }
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path_1.default.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (req.files && req.files.length > 0) {
        const allowedTypes = /jpeg|jpg|png|webp|jfif/;
        const extname = allowedTypes.test(path_1.default.extname(file.originalname).toLowerCase());
        if (extname) {
            return cb(null, true);
        }
        else {
            cb(new CustomError_1.default('Only images are allowed', 400));
        }
    }
};
exports.fileFilter = fileFilter;
//# sourceMappingURL=multer.js.map