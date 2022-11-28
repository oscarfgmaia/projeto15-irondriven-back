import { cartsCollection, sessionsCollection } from "../database/database.js";

export async function addProductToUserCart(req, res) {
    const user = res.locals.user;
    const product = req.body;
    try {
        if (!product) {
            return res.sendStatus(404);
        }
        const productWithPotencialBuyer = {
            userId: user._id,
            ...product
        }
        await cartsCollection.insertOne(productWithPotencialBuyer)
        res.sendStatus(200)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getProductsOnCart(req, res) {
    const user = res.locals.user;
    try {
        const userLoggedIn = await sessionsCollection.findOne({ userId: user._id })
        if (!userLoggedIn) {
            return res.sendStatus(401);
        }
        const products = await cartsCollection.find({ userId: userLoggedIn.userId }).toArray();
        if (!products || products.length == 0) {
            return res.sendStatus(404);
        }
        res.status(200).send(products);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}