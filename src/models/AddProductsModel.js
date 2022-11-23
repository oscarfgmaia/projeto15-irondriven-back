import joi from "joi";

 const addProductsSchema = joi.object({
    nameProduct:joi.string().required().min(3),
    description:joi.string().required().min(10),
    price:joi.number().required(),
    imageProduct:joi.string().required()
})
export default addProductsSchema;