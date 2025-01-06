import express from "express";
import { createCabin } from "../controllers/cabin.controller.js";

const router = express.Router();

router.post("/", createCabin);

export default router;
