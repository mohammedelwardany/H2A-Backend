"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("../../constants");
const connect = () => {
    mongoose_1.default.connect(constants_1.DB_CONNECTION, {
        dbName: constants_1.DB_NAME,
    }).then(() => {
        console.log("Database is Connecting...");
    }).catch((err) => console.log(err));
};
exports.connect = connect;
//# sourceMappingURL=db.js.map