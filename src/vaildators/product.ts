import Joi from "joi";

export const productSchema = {
    data: Joi.object({
        name: Joi.string().required(),
        subName: Joi.string().optional(),
        pros: Joi.array<string>().optional(),
        description: {
            describe: Joi.string().optional(),
            benefits: Joi.array<string>().optional(),
        },
        feature: Joi.array<string>().optional(),
        specifications: Joi.array<object>().optional(),
        clinicalSegments: {
            segments: Joi.array<string>().optional(),
            fieldOfApplication: Joi.array<string>().optional()
        },
        document: Joi.array().items({
            pdfUrl: Joi.string().optional(),
            size: Joi.string().optional(),
            title: Joi.string().optional()
        })
    })
}