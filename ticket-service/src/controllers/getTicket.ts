import { NotFoundError } from "@jamesmary/ticket-app-common";
import { Request, Response } from "express";
import { Ticket } from "../models/ticketModel";

export const getTicket = async (req: Request, res:Response)=>{
    const {id} = req.params
    const ticket = await Ticket.findById(id)
    if(!ticket){
        throw new NotFoundError("Ticket not found")
    }
    res.status(200).json({ticket})
}