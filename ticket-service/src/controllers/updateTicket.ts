import { NotFoundError } from "@jamesmary/ticket-app-common";
import { Request, Response } from "express";
import { Ticket } from "../models/ticketModel";
import { createTicketValidation } from "../utils/validationFunction";


export const updateTicket = async(req:Request, res:Response)=>{
    const {title, price} = req.body
    createTicketValidation(title, price)
    const ticket = await Ticket.findById(req.params.id);
    if(!ticket){
        throw new NotFoundError("Ticket not found")
    }
    ticket.set({
        title,
        price
    })
    await ticket.save()
    res.status(200).json({message:"Successfully updated", ticket})
}