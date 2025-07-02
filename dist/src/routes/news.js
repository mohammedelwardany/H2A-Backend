"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsRouter = void 0;
const joiVadiation_1 = require("../middleware/joiVadiation");
const express_1 = __importDefault(require("express"));
const general_1 = require("../vaildators/general");
const news_1 = require("../vaildators/news");
const CustomError_1 = __importDefault(require("../errors/CustomError"));
const news_2 = require("../controllers/news");
const router = express_1.default.Router();
const productControllerInstance = news_2.NewsController.getInstance();
const newsRouter = () => {
    router.get('/all', async (req, res, next) => {
        try {
            return res.status(200).json(await productControllerInstance.getNews());
        }
        catch (error) {
            next(error);
        }
    });
    router.get("/:id", (0, joiVadiation_1.joiParam)(general_1.ID.data), async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productControllerInstance.getNewsById(id);
            if (!product)
                throw new CustomError_1.default("NOT FOUND", 404);
            return res.status(200).json(product);
        }
        catch (error) {
            next(error);
        }
    });
    router.post("/", (0, joiVadiation_1.joiValidation)(news_1.newsSchema.data), async (req, res, next) => {
        try {
            return res.status(201).json(await productControllerInstance.createNews(req.body));
        }
        catch (error) {
            next(error);
        }
    });
    router.put("/:id", (0, joiVadiation_1.joiParam)(general_1.ID.data), (0, joiVadiation_1.joiValidation)(news_1.newsSchema.data), async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productControllerInstance.updateNews(id, req.body);
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
            const product = await productControllerInstance.deleteNews(id);
            if (!product)
                throw new CustomError_1.default("NOT FOUND", 404);
            return res.status(200).json({ message: "Deleted Successfully" });
        }
        catch (error) {
            next(error);
        }
    });
    return router;
};
exports.newsRouter = newsRouter;
//# sourceMappingURL=news.js.map