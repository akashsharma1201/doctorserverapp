import mongoose from "mongoose";


//  DATABASE CONNECTION 
const connectDB = async (DB_URL) => {
    // try {
    //     await mongoose.connect(DB_URL)
    //     // console.log("db connect");
    // } catch (error) {
    //     console.log(error);

    // }


    mongoose.connect(DB_URL, {
        useNewUrlParser: "true",
        useUnifiedTopology: "true"
    })
    mongoose.connection.on("error", err => {

        console.log("err", err)

    })
    mongoose.connection.on("connected", (err, res) => {

        console.log("mongoose is connected")

    })
}


export default connectDB;