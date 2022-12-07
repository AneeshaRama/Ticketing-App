import express from "express"
import { getTicket } from "../controllers/getTicket"

const router = express.Router()

router.get("/api/ticket/:id", getTicket)

export {router as getTicketRouter}