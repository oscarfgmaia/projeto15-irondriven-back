import { Router } from "express";
import { getProduct } from "../controllers/product.controller.js";

const router = Router();

router.get('/product/:id', getProduct)

export default router;