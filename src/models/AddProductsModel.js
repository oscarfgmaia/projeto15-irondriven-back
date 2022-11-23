import joi from "joi";

 const addProductsSchema = joi.object({
    name:joi.string().required().min(3),
    description:joi.string().required().min(10),
    price:joi.number().required(),
    image:joi.string().required()
})
export default addProductsSchema;