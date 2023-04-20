import { userModel } from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"


const registerUser = async (req, res) => {
    const { name, email, password, repassword } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
        res.send({ "status": "failed", "message": "user already exist" })
    } else {
        if (name && email && password && repassword) {
            if (password == repassword) {
                const saltRounds = 10;
                const hashPassword = await bcrypt.hash(password, saltRounds)
                try {
                    const newUser = await userModel({
                        name: name,
                        email: email,
                        password: hashPassword,
                        password_conform: repassword
                    })
                    await newUser.save()
                    const saved_user = await userModel.findOne({ email: email });
                    const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KET, { expiresIn: "5d" })
                    res.send({ "user": newUser, "token": token })
                } catch (error) {
                  
                    res.send({ "status": "failed", "message": "something went wrong" })
                }
            } else {
                res.send({ "status": "failed", "message": "password and password_confirm is not same !" })
            }
        } else {
            res.send({ "status": "failed", "message": "all fields are required !" })
        }
    }

}



const loginUser = async (req, res) => {

    const { email, password } = req.body

    if (email && password) {
        const user = await userModel.findOne({ email: email });
        const isMatchPassWord = await bcrypt.compare(password, user.password) 
        if (email && isMatchPassWord) {
            const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KET, { expiresIn: "5d" })
            res.send({ "user": user, "token": token })
        } else {
            res.send({ "status": "failed", "message": "somethng went wrong !" })
        }
    } else {
        res.send({ "status": "failed", "message": "all fields are required" })
    }
}



const changePassword = (req, res) => {
    res.send("change password...")
}




export { registerUser, loginUser, changePassword }