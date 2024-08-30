"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.DB_NAME = exports.DB_CONNECTION = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT || 5000;
exports.DB_CONNECTION = process.env.DB_CONNECTION;
exports.DB_NAME = process.env.DB_NAME;
exports.JWT_SECRET = process.env.JWT_SECRET;
//# sourceMappingURL=constants.js.map