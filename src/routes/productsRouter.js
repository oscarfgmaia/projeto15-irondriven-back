import { Router } from "express";
import { createProducts } from "../controllers/product.controller.js";
import { addProductsValidation } from "../middlewares/addProductsValidation.middleware.js";

const router = Router();

router.post('/addProducts', addProductsValidation,createProducts)

export default router;