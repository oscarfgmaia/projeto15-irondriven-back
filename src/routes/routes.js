import getUsersRouter from "./getUsersRouter.js";
import getProductsRouter from './getProductsRouter.js'
import getProductRouter from './getProductRouter.js'
import UseRouter from './User.routers.js';
import { Router } from "express";
const router = Router();

router.use(getUsersRouter);
router.use(getProductsRouter);
router.use(getProductRouter);
router.use(UseRouter);


export default router;