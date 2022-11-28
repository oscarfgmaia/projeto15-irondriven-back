import { Router } from "express";
import { getProductsOnCart } from "../controllers/cart.controller.js";
import { tokenValidate } from "../middlewares/tokenValidate.middleware.js";

const router = Router();

router.get('/getProductsOnCart',tokenValidate, getProductsOnCart)

export default router;