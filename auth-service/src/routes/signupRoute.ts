import express from "express"
import { signup } from "../controllers/signupController"

const router = express.Router()

router.post("/api/user/signup", signup)

export {router as signupRouter}