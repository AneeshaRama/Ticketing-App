import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/customError";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
)=>{
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({error: err.serializeError()})
    }

  
}