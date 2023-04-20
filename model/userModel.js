import mongoose from "mongoose";

// const useSchema = new mongoose.Schema({
//     username: { type: String, required: true, },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     password_confirm: { type: String }
// })


const useSchema = new mongoose.Schema({
    name: { type: String ,required :true },
    email: { type: String ,required :true },
    password: { type: String ,required :true },
    password_confirm: { type: String }
})


const userModel = mongoose.model("user", useSchema);

export { userModel };