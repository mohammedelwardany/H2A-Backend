import Joi from "joi";

export const productSchema = {
    data: Joi.object({
        name: Joi.string().required(),
        subName: Joi.string().optional().empty(),
        pros: Joi.array<string>().optional().empty(),
        description: {
            describe: Joi.string().optional().empty(),
            benefits: Joi.array<string>().optional().empty(),
        },
        images:Joi.array<object>().optional().empty(),
        feature: Joi.array<string>().optional().empty(),
        specifications: Joi.array<object>().optional().empty(),
        clinicalSegments: {
            segments: Joi.array<string>().optional().empty(),
            fieldOfApplication: Joi.array<string>().optional().empty()
        },
        document: Joi.array().items({
            pdfUrl: Joi.string().optional().empty(),
            size: Joi.string().optional().empty(),
            title: Joi.string().optional().empty()
        })
    })
}