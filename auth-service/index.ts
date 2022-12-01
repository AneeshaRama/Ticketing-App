import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import { connectDatabase } from "./utils/database"
import { errorHandler } from "./middlewares/errorHandler"

const app = express()
dotenv.config()

//middlewares
app.use(bodyParser.json())
app.use(cors())
connectDatabase()

//routes

//error handler middleware
app.use(errorHandler)

//listener
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})