import Joi from "joi";

export const authSchema ={
    data: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        name: Joi.string().required(),
        role: Joi.string().valid("admin","superadmin","editor").required()
    })
}


export const loginSchema ={
    data: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    })
}