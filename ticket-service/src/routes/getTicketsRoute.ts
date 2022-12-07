import express from "express"
import { getTickets } from "../controllers/getTickets"

const router = express.Router()

router.get("/api/tickets", getTickets)

export {router as getTicketsRouter}