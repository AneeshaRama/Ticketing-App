import express from "express"
import "express-async-errors"
import cors from "cors"
import {json} from "body-parser"
import dotenv from "dotenv"
import cookieSession from "cookie-session"
import { connectDatabase } from "./utils/database"
import { errorHandler } from "@jamesmary/ticket-app-common"
import { NotFoundError } from "@jamesmary/ticket-app-common"
import { createTicketRouter } from "./routes/createTicketRoute"
import { getTicketsRouter } from "./routes/getTicketsRoute"
import { getTicketRouter } from "./routes/getTicketRoute"


const app = express()
dotenv.config()

// database
connectDatabase()

// middlewares
app.use(cors())
app.use(json())
app.use(cookieSession({
    signed:false,
}))

// routes
app.use(createTicketRouter)
app.use(getTicketsRouter)
app.use(getTicketRouter)

app.all("*", async (req,res)=>{
    throw new NotFoundError("Page not found")
})

// error handler
app.use(errorHandler)

// listener
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})

