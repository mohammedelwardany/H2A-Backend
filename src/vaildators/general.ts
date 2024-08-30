import Joi from "joi"

export const ID = {
    data: Joi.object({
        id: Joi.string().hex().length(24).required().messages({
            "string.hex": "ID isn't valid",
            "string.length": "wrong length"
        })
    })
}