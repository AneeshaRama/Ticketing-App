import { CustomError } from "./customError";

export class NotAuthenticatedError extends CustomError{
    statusCode = 401;
    constructor(){
        super("OOPS....Please login to continue..");
        Object.setPrototypeOf(this, NotAuthenticatedError.prototype)
    }

    serializeError(){
        return {
            message:"OOPS....Please login to continue.."
        }
    }
}