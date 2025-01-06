import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./db/connectDB.js";
import cabinRoutes from "./routes/cabin.routes.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/api/cabins", cabinRoutes);

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log("Server");
  });
});

mongoose.connection.on("error", (e) => {
  console.log(e);
});
