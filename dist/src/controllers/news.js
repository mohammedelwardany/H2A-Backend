"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const News_1 = __importDefault(require("../models/News"));
class NewsController {
    static instance;
    constructor() { }
    static getInstance() {
        if (!NewsController.instance) {
            NewsController.instance = new NewsController();
        }
        return NewsController.instance;
    }
    async getNews() {
        return await News_1.default.find().sort({ createdAt: -1 });
    }
    async createNews(product) {
        return await News_1.default.create(product);
    }
    async getNewsById(id) {
        return await News_1.default.findById(id);
    }
    async updateNews(id, body) {
        return await News_1.default.findByIdAndUpdate(id, body);
    }
    async deleteNews(id) {
        const deletedNews = await News_1.default.findByIdAndDelete(id);
        return deletedNews;
    }
    async createImages(files, id, fileName) {
        const imageUrls = files.map((file) => `/images/${fileName}/${file.filename}`);
        const newProduct = {
            images: imageUrls,
        };
        await News_1.default.findByIdAndUpdate(id, { ...newProduct }, { upsert: true });
        return "Images Stored!";
    }
    async deleteImages(id) {
        const news = await News_1.default.findById(id);
        if (news) {
            const dir = path_1.default.join(__dirname, '../../public/images', news.title);
            fs_1.default.rm(dir, { recursive: true, force: true }, (err) => {
                if (err) {
                    throw err;
                }
            });
        }
    }
}
exports.NewsController = NewsController;
//# sourceMappingURL=news.js.map