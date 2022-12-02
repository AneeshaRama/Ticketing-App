import { Request, Response } from "express";
import { BadRequestError } from "../errors/badRequestError";
import { User } from "../models/userModel";
import { signupValidation } from "../utils/validationFunction";
import jwt from "jsonwebtoken"

export const signup = async (req: Request, res:Response)=>{
    const {username, email, password} = req.body;
    signupValidation(username, email,password)
    
    const isUsernameExists = await User.findOne({username});
    if(isUsernameExists){
        throw new BadRequestError("This username is not available")
    }

    const isEmailExists = await User.findOne({email})
    if(isEmailExists){
        throw new BadRequestError("This email is already in use")
    }
    const user = User.build({username, email, password})
    await user.save()

    // generating token
    const token = jwt.sign({id: user.id, email:user.email}, process.env.JWT_SECRET!)

    req.session = {
        jwtToken: token
    };

    return res.status(201).json({message:"Successfully registered..", user})
}