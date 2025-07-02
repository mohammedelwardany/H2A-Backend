"use strict";
// import { PORT } from './../constants';
// import express from "express";
// import cors from "cors";
// import { connect } from './config/db';
// import { mainRouter } from './routes';
// import { errorHandler } from './middleware/errorHandler';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import path from 'path';
// const app = express();
// //#region Middleware
// //cors
// app.use(cors());
// //parse json
// app.use(express.json());
// // save the images in server in static folder which can we get from it the images
// app.use('/images', express.static(path.join(__dirname, '../public/images')));
// //#endregion
// //test request
// app.get("/", (req:express.Request, res:express.Response) => {
//   res.send("Hello World ");
// });
// app.use('/api/v1',mainRouter)
// app.use(errorHandler)
// connect();
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("../src/config/db");
const routes_1 = require("../src/routes");
const errorHandler_1 = require("../src/middleware/errorHandler");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
//#region Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/images', express_1.default.static(path_1.default.join(__dirname, '../public/images')));
//#endregion
// Test route
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use('/api/v1', routes_1.mainRouter);
app.use(errorHandler_1.errorHandler);
// Connect to DB (do it once, not every request)
(0, db_1.connect)();
// Export the app as a handler for Vercel
exports.default = (req, res) => {
    app(req, res);
};
//# sourceMappingURL=index.js.map