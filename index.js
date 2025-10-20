import express from "express";
import connection from "./connection.js";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.json({ message: "success" });
});
app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
