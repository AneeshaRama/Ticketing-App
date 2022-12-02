import { RequestValidationError } from "../errors/requestValidationError"

export const signupValidation = (username:string, email:string, password:string)=>{
    if(!username || !email || !password){
        throw new RequestValidationError("Please enter all the required fields")
    }

    if(password.length < 6){
        throw new RequestValidationError("Password should contain atleast 6 characters")
    }
}