import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./db/connectDB.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/", (req, res) => {
  return res.json({ msg: "Success" });
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log("Server");
  });
});

mongoose.connection.on("error", (e) => {
  console.log(e);
});
