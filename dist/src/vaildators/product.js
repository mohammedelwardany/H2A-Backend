"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.productSchema = {
    data: joi_1.default.object({
        name: joi_1.default.string().required(),
        subName: joi_1.default.string().optional().empty(),
        pros: joi_1.default.array().optional().empty(),
        description: {
            describe: joi_1.default.string().optional().empty(),
            benefits: joi_1.default.array().optional().empty(),
        },
        images: joi_1.default.array().optional().empty(),
        feature: joi_1.default.array().optional().empty(),
        specifications: joi_1.default.array().optional().empty(),
        clinicalSegments: {
            segments: joi_1.default.array().optional().empty(),
            fieldOfApplication: joi_1.default.array().optional().empty()
        },
        document: joi_1.default.array().items({
            pdfUrl: joi_1.default.string().optional().empty(),
            size: joi_1.default.string().optional().empty(),
            title: joi_1.default.string().optional().empty()
        })
    })
};
//# sourceMappingURL=product.js.map