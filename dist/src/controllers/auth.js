"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
const CustomError_1 = __importDefault(require("../errors/CustomError"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../../constants");
class authController {
    static instance;
    constructor() { }
    static getInstance() {
        if (!authController.instance) {
            authController.instance = new authController();
        }
        return authController.instance;
    }
    async login(email, password) {
        const user = await User_1.default.findOne({ email }, { __v: 0 });
        if (!user)
            throw new CustomError_1.default("Invalid credentials", 401);
        const isMatch = await bcrypt_1.default.compare(password, user.password);
        if (!isMatch)
            throw new CustomError_1.default("Invalid credentials", 401);
        const token = jsonwebtoken_1.default.sign({ user }, constants_1.JWT_SECRET);
        return { user, token };
    }
    async adduser(user_) {
        const { name, email, password, role } = user_;
        const passwordHash = await bcrypt_1.default.hash(password, 10);
        const user = await User_1.default.create({
            name,
            email,
            password: passwordHash,
            role
        });
        return user;
    }
}
exports.authController = authController;
//# sourceMappingURL=auth.js.map