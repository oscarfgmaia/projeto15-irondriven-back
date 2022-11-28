import { userSchema, userSchemaLogin } from "../models/users.model.js";
import { usersCollection } from "../database/database.js";
import bcrypt from "bcrypt";

export async function userValidation(req, res, next) {
    const user = req.body;
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    try {
        const userExist = await usersCollection.findOne( {email:user.email} )
        if (userExist) {
            res.sendStatus(401)
            return
        }

    } catch (err) {
        res.sendStatus(500)
    }
    res.locals.user = user;
    next();
}

export async function signInBodyValidation(req, res, next) {
    const { email, password } = req.body;


    const { error } = userSchemaLogin.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    try {
        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.sendStatus(401);
        }
        const passwordOk = bcrypt.compareSync(password, user.password);
        if (!passwordOk) {
            return res.sendStatus(401);
        }
        res.locals.user = user;

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

    next();
}