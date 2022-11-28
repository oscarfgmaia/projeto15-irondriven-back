import { usersCollection, sessionsCollection } from "../database/database.js";
import { v4 as uuid } from "uuid";

import bcrypt from "bcrypt";

export async function getUsers(req, res) {
    try {
        res.send("SENDING USER INFO");
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}

export async function signUp(req, res) {
    const user = res.locals.user;

    const passwordHash = bcrypt.hashSync(user.password, 10);

    try {
        await usersCollection.insertOne({ ...user, password: passwordHash })
        res.sendStatus(201);
        
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function signIn(req, res) {
    try {
        let { email, password } = req.body;
        email = email.toLowerCase();
        const userExists = await usersCollection.findOne({ email })
        if (!userExists) {
            return res.status(404).send("email not registered");//not found
        }
        if (userExists && bcrypt.compareSync(password, userExists.password)) {
            const token = uuid();
            const isUserSessionExists = await sessionsCollection.findOne({ userId: userExists._id })
            if (isUserSessionExists) {
                await sessionsCollection.deleteOne({ _id: isUserSessionExists._id })
            }
            await sessionsCollection.insertOne({
                userId: userExists._id,
                token
            })
            res.send({ token })
        } else {
            return res.status(401).send("wrong password");//not found
        }

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}