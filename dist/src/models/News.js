"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const newsScheme = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    paragraph: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
const News = (0, mongoose_1.model)('news', newsScheme);
exports.default = News;
//# sourceMappingURL=News.js.map