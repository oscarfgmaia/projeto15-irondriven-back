import getUsersRouter from "./getUsersRouter.js";


import { Router } from "express";
const router = Router();

router.use(getUsersRouter);

export default router;