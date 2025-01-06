import express from "express";
import {
  createCabin,
  deleteCabin,
  getAllCabins,
  updateCabin,
} from "../controllers/cabin.controller.js";

const router = express.Router();

router.get("/", getAllCabins);
router.post("/", createCabin);
router.put("/update/:id", updateCabin);
router.delete("/:id", deleteCabin);

export default router;
