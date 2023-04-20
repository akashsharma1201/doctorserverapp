import mongoose from "mongoose";


//  DATABASE CONNECTION 
const connectDB =async (DB_URL) => {
    try {
        await mongoose.connect(DB_URL)
        console.log("db connect");
    } catch (error) {
        console.log(error);
    }
}


export default connectDB ;