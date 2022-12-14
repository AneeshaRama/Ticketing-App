import { RequestValidationError } from "@jamesmary/ticket-app-common"

export const signupValidation = (username:string, email:string, password:string)=>{
    if(!username || !email || !password){
        throw new RequestValidationError("Please enter all the required fields")
    }

    if(password.length < 6){
        throw new RequestValidationError("Password should contain atleast 6 characters")
    }
}

export const signinValidation = (username:string, password:string)=>{
    if(!username || !password){
        throw new RequestValidationError("Please enter all required fields")
    }
}