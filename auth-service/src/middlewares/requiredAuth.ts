import { NextFunction, Request, Response } from "express";
import { NotAuthenticatedError } from "../errors/notAuthenticatedError";

export const requiredAuth = (req: Request, res:Response, next:NextFunction)=>{
    if(!req.session?.jwtToken){
        throw new NotAuthenticatedError()
    }

    next()
}