"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiParam = exports.joiValidation = void 0;
const joiValidation = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body, { abortEarly: false });
            next();
        }
        catch (error) {
            return res.status(400).json({ error: error.details.map((error) => {
                    return { message: error.message };
                }) });
        }
    };
};
exports.joiValidation = joiValidation;
const joiParam = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.params, { abortEarly: false });
            next();
        }
        catch (error) {
            return res.status(400).json({ error: error.details.map((error) => {
                    return { message: error.message };
                }) });
        }
    };
};
exports.joiParam = joiParam;
//# sourceMappingURL=joiVadiation.js.map