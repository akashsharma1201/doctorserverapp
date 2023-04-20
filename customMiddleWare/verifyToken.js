import { userModel } from "../model/userModel.js";
import jwt from "jsonwebtoken"; 


const verifyToken = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            token = authorization.split(" ")[1];
            const { userID } = jwt.verify(token, "sfhshbxashcdvaxgvasyjhcvscajh")
            req.user = await userModel.findById(userID)
            next()
        } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "failed", "message": "Unauthorized User " })
        }
    }
    if (!token) {
        res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" })
    }

}

export { verifyToken };