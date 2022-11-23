import getUsersRouter from "./getUsersRouter.js";
import productsrouter from './productsRouter.js'


import { Router } from "express";
const router = Router();

router.use(getUsersRouter);
router.use(productsrouter);

export default router;