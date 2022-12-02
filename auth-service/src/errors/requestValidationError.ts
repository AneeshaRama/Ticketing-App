import { CustomError } from "./customError";

export class RequestValidationError extends CustomError{
    statusCode = 400;
    constructor(message:string){
        super(message)
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeError(){
        return {
            message: this.message
        }
    }
}