"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const joiVadiation_1 = require("../middleware/joiVadiation");
const product_1 = require("../controllers/product");
const express_1 = __importDefault(require("express"));
const general_1 = require("../vaildators/general");
const product_2 = require("../vaildators/product");
const CustomError_1 = __importDefault(require("../errors/CustomError"));
const router = express_1.default.Router();
const productControllerInstance = product_1.productController.getInstance();
const productRouter = () => {
    router.get("/", async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            const products = await productControllerInstance.getAllProducts(+limit, +skip);
            return res.status(200).json(products);
        }
        catch (error) {
            next(error);
        }
    });
    router.get("/:id", (0, joiVadiation_1.joiParam)(general_1.ID.data), async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productControllerInstance.getProductById(id);
            if (!product)
                throw new CustomError_1.default("NOT FOUND", 404);
            return res.status(200).json(product);
        }
        catch (error) {
            next(error);
        }
    });
    router.post("/", (0, joiVadiation_1.joiValidation)(product_2.productSchema.data), async (req, res, next) => {
        try {
            return res.status(201).json(await productControllerInstance.createProduct(req.body));
        }
        catch (error) {
            next(error);
        }
    });
    router.put("/:id", (0, joiVadiation_1.joiParam)(general_1.ID.data), (0, joiVadiation_1.joiValidation)(product_2.productSchema.data), async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productControllerInstance.updateProduct(id, req.body);
            if (!product)
                throw new CustomError_1.default("NOT FOUND", 404);
            return res.status(200).json({ message: "Product Update Successfully" });
        }
        catch (error) {
            next(error);
        }
    });
    router.delete("/:id", (0, joiVadiation_1.joiParam)(general_1.ID.data), async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productControllerInstance.deleteProduct(id);
            if (!product)
                throw new CustomError_1.default("NOT FOUND", 404);
            return res.status(200).json({ product, message: "Deleted Successfully" });
        }
        catch (error) {
            next(error);
        }
    });
    return router;
};
exports.productRouter = productRouter;
//# sourceMappingURL=product.js.map