import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { userRoute } from "./routes/userRoute.js";
import connectDB from "./connectionDB/connectDB.js";
import { appointmentRoute } from "./routes/appointmentRoute.js";
import { verifyToken } from "./customMiddleWare/verifyToken.js";



dotenv.config()
const app = express();
const port = process.env.PORT;
const DB_URL = process.env.DB_URL



// middle ware
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/app/api/user", userRoute)
app.use("/app/api/appointment", verifyToken, appointmentRoute)
// app.use("/app/api/appointment/", appointmentRoute)


 

//  DATABASE CONNECTION
connectDB(DB_URL)

app.listen(port ,()=>{
    console.log("server at port 5000");
})