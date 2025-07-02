"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.newsSchema = {
    data: joi_1.default.object({
        title: joi_1.default.string().required(),
        paragraph: joi_1.default.string().optional().empty(),
        image: joi_1.default.string().optional().empty(),
    })
};
//# sourceMappingURL=news.js.map