import getUsersRouter from "./getUsersRouter.js";
import productsrouter from './productsRouter.js'
import getProductsRouter from "./getProductsRouter.js"

import { Router } from "express";
const router = Router();

router.use(getUsersRouter);
router.use(productsrouter);
router.use(getProductsRouter)

export default router;