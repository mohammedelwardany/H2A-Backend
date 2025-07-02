"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    subName: {
        type: String,
        required: false
    },
    pros: {
        type: [String],
        required: false
    },
    images: {
        type: [Object],
        required: false
    },
    feature: {
        type: [String],
        required: false
    },
    description: {
        describe: {
            type: String,
            required: true
        },
        benefits: {
            type: [String],
            required: false
        }
    },
    specifications: {
        type: [Object]
    },
    clinicalSegments: {
        segments: {
            type: [String],
            required: false
        },
        fieldOfApplication: {
            type: [String],
            required: false
        }
    },
    document: [{
            pdfUrl: {
                type: String,
                required: false
            },
            size: {
                type: String,
                required: false
            },
            title: {
                type: String,
                required: false
            }
        }]
});
const Product = (0, mongoose_1.model)('product', productSchema);
exports.default = Product;
//# sourceMappingURL=Product.js.map