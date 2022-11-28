import getUsersRouter from "./getUsersRouter.js";
import getProductsRouter from './getProductsRouter.js'
import getProductRouter from './getProductRouter.js'
import postAddToCart from './postAddToCart.js'
import getProductsOnCartRouter from "./getProductsOnCartRouter.js"
import UseRouter from './User.routers.js';
import { Router } from "express";
const router = Router();

router.use(postAddToCart)
router.use(getUsersRouter);
router.use(getProductsRouter);
router.use(getProductRouter);
router.use(getProductsOnCartRouter);
router.use(UseRouter);


export default router;