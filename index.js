import express from "express";
import { signin, signup } from "./controllers/user.controller.js";
import connection from "./connection.js";

const app = express();
const port = 3000;

app.use(express.json());

// user signup
app.post("/signup", signup);

// user signin
app.post("/signin", signin);
app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
