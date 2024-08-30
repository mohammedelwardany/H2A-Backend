"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    // console.error(err.stack);
    res.status(err.statusCode || 500).send({
        errors: { message: err.message },
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map