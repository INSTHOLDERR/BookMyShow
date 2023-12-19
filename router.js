import { Router } from "express";
import * as userHandler from "./request-handler.js";


const router = Router();

router.route("/register").post(userHandler.register);
router.route("/login").post(userHandler.login);
router.route("/upload").post(userHandler.login);
router.route("/view").post(userHandler.login);


export default router;