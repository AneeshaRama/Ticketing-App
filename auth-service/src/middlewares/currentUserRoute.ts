import express from "express"
import { signedInUser } from "../controllers/currentUserController"
import { currentUser } from "./currentUser"

const router = express.Router()

router.get("/api/current-user",currentUser, signedInUser)

export {router as currentUserRouter}