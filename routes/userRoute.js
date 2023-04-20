import express from "express";
import { registerUser , loginUser ,changePassword } from "../controllers/usercontroller.js";

const router = express.Router();


router.post("/register", registerUser);
router.post("/login" , loginUser);
router.post("/changepassword" , changePassword);

export {router as userRoute}