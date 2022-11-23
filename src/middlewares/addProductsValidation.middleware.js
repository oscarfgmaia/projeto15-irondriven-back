import addProductsSchema from '../models/AddProductsModel.js'

export async function addProductsValidation(req, res, next) {
    const product = req.body

    const { error } = addProductsSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }
    res.locals.product = product;
    next();
}