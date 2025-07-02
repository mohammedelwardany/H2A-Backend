import Joi from "joi";

export const newsSchema = {
    data: Joi.object({
        title: Joi.string().required(),
        paragraph: Joi.string().optional().empty(),
        image: Joi.string().optional().empty(),
    })
}