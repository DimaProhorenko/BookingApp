import express from "express";
import dotenv from "dotenv";

const app = express();

app.use("/", (req, res) => {
  return res.json({ msg: "Success" });
});

app.listen("5000", () => {
  console.log("Server");
});
