import { Request, Response } from "express";

export const signedInUser = (req: Request, res:Response)=>{
    return res.status(200).json({currentUser: req.currentUser})
}