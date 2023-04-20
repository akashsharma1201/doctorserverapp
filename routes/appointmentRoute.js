import express from "express";
import { bookAppointment } from "../controllers/appointmentController.js";

const app = express.Router();

// app.post("/bookappointment" ,bookAppointment)
app.post("/bookappointment" , bookAppointment)


export {app as appointmentRoute};
