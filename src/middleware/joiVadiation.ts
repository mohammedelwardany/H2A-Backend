import { ObjectSchema } from "joi";


export const joiValidation = (schema: ObjectSchema) => {
    return async (req: any, res: any, next: any) => {
        try {
            await schema.validateAsync(req.body, { abortEarly: false });
            next();
        } catch (error) {
            return res.status(400).json({error:error.details.map((error:any)=>{
                return {message:error.message}
            })});
        }
    };
}

export const joiParam = (schema:ObjectSchema)=>{
    return async (req: any, res: any, next: any) => {
        try {
            await schema.validateAsync(req.params, { abortEarly: false });
            next();
        } catch (error) {
            return res.status(400).json({error:error.details.map((error:any)=>{
                return {message:error.message}
            })});
        }
    };
}