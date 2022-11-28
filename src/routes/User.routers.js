import { Router } from "express";
import { signUp, signIn } from "../controllers/user.controller.js";
import { userValidation, signInBodyValidation } from "../middlewares/userValidation.middleware.js";

const router = Router();

router.post("/sign-up", userValidation, signUp)
router.post("/sign-in", signInBodyValidation, signIn)

export default router;