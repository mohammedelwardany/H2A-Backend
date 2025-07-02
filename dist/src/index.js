"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./../constants");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const routes_1 = require("./routes");
const errorHandler_1 = require("./middleware/errorHandler");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
//#region Middleware
//cors
app.use((0, cors_1.default)());
//parse json
app.use(express_1.default.json());
// save the images in server in static folder which can we get from it the images
app.use('/images', express_1.default.static(path_1.default.join(__dirname, '../public/images')));
//#endregion
//test request
app.get("/", (req, res) => {
    res.send("Hello World ");
});
app.use('/api/v1', routes_1.mainRouter);
app.use(errorHandler_1.errorHandler);
(0, db_1.connect)();
app.listen(constants_1.PORT, () => {
    console.log(`Server is running on port ${constants_1.PORT}`);
});
//# sourceMappingURL=index.js.map