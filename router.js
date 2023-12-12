import { Router } from "express";
import * as userHandler from "./request-handler.js";


const router = Router();

router.route("/register").post(userHandler.register);


export default router;