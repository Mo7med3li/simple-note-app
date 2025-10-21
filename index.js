import express from "express";
import {
  deleteUser,
  signin,
  signup,
  updateUser,
} from "./controllers/user.controller.js";
import connection from "./connection.js";
import { addNote } from "./controllers/note.controller.js";

const app = express();
const port = 3000;

app.use(express.json());

// user signup
app.post("/signup", signup);

// user signin
app.post("/signin", signin);

// update user
app.put("/update-user/:id", updateUser);

// delete user
app.delete("/delete-user/:id", deleteUser);

// ? note endpoints

// add note
app.post("/add-note", addNote);

app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
