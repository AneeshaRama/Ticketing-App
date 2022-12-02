import { Request, Response } from "express";
import { BadRequestError } from "../errors/badRequestError";
import { User } from "../models/userModel";
import { Password } from "../utils/password";
import jwt from "jsonwebtoken"
import { signinValidation } from "../utils/validationFunction";

export const signin = async(req:Request, res:Response)=>{
    const {username, password} = req.body
    signinValidation(username, password);
    const existingUser = await User.findOne({username});
    if(!existingUser){
        throw new BadRequestError("Invalid credentials")
    }

    const passwordMatch = await Password.compare(existingUser.password, password)
    if(!passwordMatch){
        throw new BadRequestError("Invalid credentials")
    }
    
    // generating token
    const token = jwt.sign({id:existingUser.id, email:existingUser.email}, process.env.JWT_SECRET!)

    req.session = {
        jwtToken: token
    }

    return res.status(200).json({message:"Successfully logged in", existingUser})
}