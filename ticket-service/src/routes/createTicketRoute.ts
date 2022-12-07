import { currentUser, requiredAuth } from "@jamesmary/ticket-app-common"
import express from "express"
import { createTicket } from "../controllers/createTicket"

const router = express.Router()

router.post("/api/ticket/new", requiredAuth,currentUser, createTicket)

export {router as createTicketRouter}
