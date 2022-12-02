import express from "express"
import { signin } from "../controllers/signinController"

const router = express.Router()

router.post("/api/user/signin", signin)

export {router as signinRouter}