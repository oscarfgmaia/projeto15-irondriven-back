import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config();

//connect to database
const mongoCLient = new MongoClient(process.env.MONGO_URI);
let db;

try {
    await mongoCLient.connect();
    console.log("Connected to database successfully.");
    db = mongoCLient.db("ironDriven");
} catch (error) {
    console.log(error);
}

//collections to use
export const usersCollection = db.collection("users");
export const productsCollection = db.collection("products");
export const sessionsCollection = db.collection("sessions");

