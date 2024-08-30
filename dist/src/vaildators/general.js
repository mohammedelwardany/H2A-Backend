"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ID = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ID = {
    data: joi_1.default.object({
        id: joi_1.default.string().hex().length(24).required().messages({
            "string.hex": "ID isn't valid",
            "string.length": "wrong length"
        })
    })
};
//# sourceMappingURL=general.js.map