import Joi from "joi";

export const productSchema = {
    data: Joi.object({
        name: Joi.string().required(),
        subName: Joi.string().optional(),
        pros: Joi.array<string>().optional(),
        images: Joi.array<string>().optional(),
        activeImage: Joi.string().optional(),
        hoverImage: Joi.string().optional(),
        description: {
            describe: Joi.string().optional(),
            benefits: Joi.array<string>().optional(),
        },
        feature: Joi.array<string>().optional(),
        specifications: {
            horizontalAdjustment: Joi.string().optional(),
            verticalAdjustment: Joi.string().optional(),
            wheel: Joi.string().optional()
        },
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