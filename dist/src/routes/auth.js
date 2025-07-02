"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const auth_1 = require("../controllers/auth");
const express_1 = __importDefault(require("express"));
const auth_2 = require("../vaildators/auth");
const joiVadiation_1 = require("../middleware/joiVadiation");
const router = express_1.default.Router();
const authControllerInstance = auth_1.authController.getInstance();
const authRouter = () => {
    router.post("/login", (0, joiVadiation_1.joiValidation)(auth_2.loginSchema.data), async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await authControllerInstance.login(email, password);
            return res.status(200).json({ message: "Successfully", user });
        }
        catch (error) {
            next(error);
        }
    });
    router.post("/register", (0, joiVadiation_1.joiValidation)(auth_2.authSchema.data), async (req, res, next) => {
        try {
            const { name, email, password, role } = req.body;
            await authControllerInstance.adduser({ name, email, password, role });
            return res.status(201).json({ message: "User Created Successfully" });
        }
        catch (error) {
            next(error);
        }
    });
    return router;
};
exports.authRouter = authRouter;
//# sourceMappingURL=auth.js.map