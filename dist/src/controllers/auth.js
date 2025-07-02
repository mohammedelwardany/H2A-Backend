"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
const CustomError_1 = __importDefault(require("../errors/CustomError"));
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
        // const token = jwt.sign({user},JWT_SECRET as string)
        user.password = undefined;
        return user;
    }
    async adduser(user_) {
        const { name, email, password, role } = user_;
        const userFound = await User_1.default.findOne({ email }, { __v: 0 });
        if (userFound)
            throw new CustomError_1.default("User is Registered Already", 400);
        const passwordHash = await bcrypt_1.default.hash(password, +constants_1.PASSWORD_HASH_ROUND);
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