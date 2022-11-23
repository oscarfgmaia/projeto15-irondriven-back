import { usersCollection } from "../database/database.js";

export async function getUsers(req,res){
    try {
        res.send("SENDING USER INFO");
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}