import express from "express"
import "express-async-errors"
import cors from "cors"
import {json} from "body-parser"
import dotenv from "dotenv"
import cookieSession from "cookie-session"
import { connectDatabase } from "./utils/database"
import { signupRouter } from "./routes/signupRoute"
import { errorHandler } from "./middlewares/errorHandler"

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

// error handler
app.use(errorHandler)

// listener
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})

