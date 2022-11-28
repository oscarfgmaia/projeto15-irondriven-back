import { ObjectId } from 'mongodb';
import { productsCollection } from '../database/database.js'

export async function createProducts(req, res) {
    const product = res.locals.product
    const newProduct = {
        ...product, sold_amount: 0
    }
    try {
        await productsCollection.insertOne(newProduct);
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

}


export async function getProducts(req, res) {
    try {
        const products = await productsCollection.find({}).toArray();
        if (!products || products.length == 0) {
            return res.sendStatus(404);
        }
        res.status(200).send(products);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getProduct(req, res) {
    const id = req.params.id
    try {
        const product = await productsCollection.findOne({ _id: ObjectId(id) })
        if (!product) {
            return res.sendStatus(404);
        }
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}