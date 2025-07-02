"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Product_1 = __importDefault(require("../models/Product"));
class productController {
    static instance;
    constructor() { }
    static getInstance() {
        if (!productController.instance) {
            productController.instance = new productController();
        }
        return productController.instance;
    }
    async getProducts(limit, skip, segments, fieldOfApplication, search) {
        const filter = {};
        if (segments && segments.length > 0) {
            filter['clinicalSegments.segments'] = { $in: segments };
        }
        if (fieldOfApplication && fieldOfApplication.length > 0) {
            filter['clinicalSegments.fieldOfApplication'] = { $in: fieldOfApplication };
        }
        if (search)
            filter["name"] = new RegExp(search, "i");
        return await Product_1.default.find(filter).skip((skip - 1) * limit).limit(limit);
    }
    async createProduct(product) {
        return await Product_1.default.create(product);
    }
    async getProductById(id) {
        return await Product_1.default.findById(id);
    }
    async updateProduct(id, body) {
        return await Product_1.default.findByIdAndUpdate(id, body);
    }
    async deleteProduct(id) {
        const deletedProduct = await Product_1.default.findByIdAndDelete(id);
        // if(deletedProduct) this.deleteImages(deletedProduct.name);
        return deletedProduct;
    }
    async getSegment_Fields() {
        const clinicalData = await Product_1.default.aggregate([
            { $unwind: '$clinicalSegments.segments' },
            { $unwind: '$clinicalSegments.fieldOfApplication' },
            {
                $group: {
                    _id: null,
                    segments: { $addToSet: '$clinicalSegments.segments' },
                    fieldOfApplication: { $addToSet: '$clinicalSegments.fieldOfApplication' }
                }
            },
            { $project: { _id: 0, segments: 1, fieldOfApplication: 1 } }
        ]);
        return clinicalData[0] || { segments: [], fieldOfApplication: [] };
    }
    async search(productName) {
        return await Product_1.default.find({ name: productName });
    }
    async createImages(files, id, fileName) {
        const imageUrls = files.map((file) => `/images/${fileName}/${file.filename}`);
        const newProduct = {
            images: imageUrls,
        };
        await Product_1.default.findByIdAndUpdate(id, { ...newProduct }, { upsert: true });
        return "Images Stored!";
    }
    deleteImages(name) {
        const dir = path_1.default.join(__dirname, '../../public/images', name);
        fs_1.default.rm(dir, { recursive: true, force: true }, (err) => {
            if (err) {
                throw err;
            }
        });
    }
    async getAllProducts() {
        return await Product_1.default.find();
    }
}
exports.productController = productController;
//# sourceMappingURL=product.js.map