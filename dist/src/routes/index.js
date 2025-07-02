"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("./user");
const auth_1 = require("./auth");
const product_1 = require("./product");
const news_1 = require("./news");
exports.mainRouter = express_1.default.Router();
exports.mainRouter.use('/user', (0, user_1.userRouter)());
exports.mainRouter.use('/auth', (0, auth_1.authRouter)());
exports.mainRouter.use('/product', (0, product_1.productRouter)());
exports.mainRouter.use('/news', (0, news_1.newsRouter)());
//# sourceMappingURL=index.js.map