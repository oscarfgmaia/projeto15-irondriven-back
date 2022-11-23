import { productsCollection } from '../database/database.js'

export async function createProducts(req, res) {
    const product = res.locals.product

    try {
        await productsCollection.insertOne(product);
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

}