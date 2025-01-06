import express from "express";
import {
  createCabin,
  getAllCabins,
  updateCabin,
} from "../controllers/cabin.controller.js";

const router = express.Router();

router.get("/", getAllCabins);
router.post("/", createCabin);
router.put("/update/:id", updateCabin);

export default router;
