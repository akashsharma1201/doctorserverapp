import express from "express";
import { registerUser , loginUser ,changePassword } from "../controllers/usercontroller.js";

const router = express.Router();


router.post("register", registerUser);
// router.get("/get", registerUser);
router.post("login" , loginUser);
router.get("changepassword" , changePassword);

export {router as userRoute}