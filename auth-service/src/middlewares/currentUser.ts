import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { BadRequestError } from "../errors/badRequestError"

interface UserPayload{
    id: string, 
    email: string
}

declare global{
    namespace Express{
        interface Request{
            currentUser?: UserPayload
        }
    }
}


export const currentUser = async (
    req: Request,
    res: Response,
    next: NextFunction
)=>{
    if(!req.session?.jwtToken){
        throw new BadRequestError("Please login to continue")
    }

    const payload =  jwt.verify(req.session.jwtToken, process.env.JWT_SECRET!) as UserPayload

    req.currentUser = payload;

    next()
}