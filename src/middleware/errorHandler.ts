import { Request, Response, NextFunction } from 'express';


import CustomError from "errors/CustomError";

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  // console.error(err.stack);

  res.status(err.statusCode || 500).send({
    errors: { message: err.message },
  });
}