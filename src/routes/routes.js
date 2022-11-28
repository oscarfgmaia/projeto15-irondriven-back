import getUsersRouter from "./getUsersRouter.js";
import productsrouter from './productsRouter.js'
import UseRouter from './User.routers.js';
import { Router } from "express";
const router = Router();

router.use(getUsersRouter);
router.use(productsrouter);
router.use(UseRouter);


export default router;