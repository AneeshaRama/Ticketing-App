import { RequestValidationError } from "@jamesmary/ticket-app-common"

export const createTicketValidation = (title: string, price: number)=>{
    if(!title){
        throw new RequestValidationError("Please enter title")
    }
    if(!price){
        throw new RequestValidationError("Please enter price")
    }
    if(price === 0){
        throw new RequestValidationError("Price should be greater than 0")
    }
}