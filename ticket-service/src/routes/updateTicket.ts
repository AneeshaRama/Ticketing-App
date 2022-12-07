import express from "express"
import { updateTicket } from "../controllers/updateTicket"

const router = express.Router()

router.put("/api/ticket/:id", updateTicket)

export {router as updateTicketRouter}