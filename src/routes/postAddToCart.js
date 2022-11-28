import { Router } from "express";
import { addProductToUserCart } from "../controllers/cart.controller.js";
import { tokenValidate } from "../middlewares/tokenValidate.middleware.js";

const router = Router();

router.post('/addToCart', tokenValidate, addProductToUserCart)

export default router;