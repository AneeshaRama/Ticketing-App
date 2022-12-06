import express from "express"
import "express-async-errors"
import cors from "cors"
import {json} from "body-parser"
import dotenv from "dotenv"
import cookieSession from "cookie-session"
import { connectDatabase } from "./src/utils/database"
import { signupRouter } from "./src/routes/signupRoute"
import { errorHandler } from "@jamesmary/ticket-app-common"
import { NotFoundError } from "@jamesmary/ticket-app-common"
import { signinRouter } from "./src/routes/signinRoute"
import { signoutRouter } from "./src/routes/signoutRoute"
import { currentUserRouter } from "./src/routes/currentUserRoute"

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
app.use(signupRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(currentUserRouter)

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

