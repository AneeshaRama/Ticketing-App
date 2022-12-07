import { Request, Response } from "express";
import { Ticket } from "../models/ticketModel";
import { createTicketValidation } from "../utils/validationFunction";

export const createTicket = async (req: Request, res: Response)=>{
    const {title, price} = req.body;
    createTicketValidation(title, price);
    const ticket =  Ticket.build({
        title,
        price,
        userId: req.currentUser!.id
    })
    await ticket.save()
    res.status(201).json({message: "Successfully created ticket", ticket})
}