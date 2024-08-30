"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const User_1 = __importDefault(require("../models/User"));
class userController {
    static instance;
    constructor() { }
    static getInstance() {
        if (!userController.instance) {
            userController.instance = new userController();
        }
        return userController.instance;
    }
    getAllUsers() {
        return "All Users.....";
    }
    async createUser() {
        return await User_1.default.create({
            name: "abdo",
            password: "Abdo12345",
            email: "abdo@example.com",
            role: "admin"
        });
    }
    async getUserById(id) {
        return await User_1.default.findById(id);
    }
}
exports.userController = userController;
//# sourceMappingURL=user.js.map