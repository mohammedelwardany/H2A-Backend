"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const CustomError_1 = __importDefault(require("../errors/CustomError"));
const user_1 = require("../controllers/user");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userControllerInstance = user_1.userController.getInstance();
const userRouter = () => {
    router.get("/users", (req, res) => {
        res.json({ message: userControllerInstance.getAllUsers() });
    });
    router.post("/", (req, res) => {
        res.json({ message: "Created", user: userControllerInstance.createUser() });
    });
    router.get("/:id", async (req, res, next) => {
        try {
            const user = await userControllerInstance.getUserById(req.params.id);
            if (!user) {
                return next(new CustomError_1.default("User Not Found", 404));
            }
            return res.status(200).json({ message: "Successfully", user });
        }
        catch (error) {
            next(new CustomError_1.default(error.message));
        }
    });
    return router;
};
exports.userRouter = userRouter;
//# sourceMappingURL=user.js.map