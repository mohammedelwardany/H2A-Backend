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
        subName: joi_1.default.string().optional(),
        pros: joi_1.default.array().optional(),
        images: joi_1.default.array().optional(),
        activeImage: joi_1.default.string().optional(),
        hoverImage: joi_1.default.string().optional(),
        description: {
            describe: joi_1.default.string().optional(),
            benefits: joi_1.default.array().optional(),
        },
        feature: joi_1.default.array().optional(),
        specifications: {
            horizontalAdjustment: joi_1.default.string().optional(),
            verticalAdjustment: joi_1.default.string().optional(),
            wheel: joi_1.default.string().optional()
        },
        clinicalSegments: {
            segments: joi_1.default.array().optional(),
            fieldOfApplication: joi_1.default.array().optional()
        },
        document: joi_1.default.array().items({
            pdfUrl: joi_1.default.string().optional(),
            size: joi_1.default.string().optional(),
            title: joi_1.default.string().optional()
        })
    })
};
//# sourceMappingURL=product.js.map