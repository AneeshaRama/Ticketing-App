import { NotFoundError } from "@jamesmary/ticket-app-common";
import { Request, Response } from "express";
import { Ticket } from "../models/ticketModel";

export const getTickets = async (req: Request, res: Response)=>{
    const tickets = await Ticket.find({})
    if(!tickets){
        throw new NotFoundError("Tickets not found")
    }
    res.status(200).json({tickets})
}