import express from "express";
import { signup } from "./controllers/user.controller.js";

const app = express();
const port = 3000;

app.use(express.json());

// user signup
app.post("/signup", signup);
app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
