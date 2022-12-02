import express from "express"
import { signout } from "../controllers/signoutController"

const router = express.Router()

router.get("/api/user/signout", signout)

export {router as signoutRouter}