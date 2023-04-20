import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patientName : {type :String , required : true},
    email : {type :String , required : true},
    phone : {type :String , required : true},
    services : {type :String , required : true},
    doctorName : {type :String , required : true},
    age : {type :String , required : true}
})

const appointmentModel = mongoose.model("appointment" , appointmentSchema);

export {appointmentModel}