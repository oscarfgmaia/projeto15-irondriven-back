import joi from "joi";

const addProductsSchema = joi.object({
    name: joi.string().required().min(3).max(22),
    description: joi.string().required().min(10),
    price: joi.number().required(),
    image: joi.string().uri().required(),
    category: joi.string().valid("game","movie","otaku").required()
})
export default addProductsSchema;