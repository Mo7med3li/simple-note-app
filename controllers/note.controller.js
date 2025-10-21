import connection from "../connection.js";

// add note
export const addNote = (req, res) => {
  const { title, description, createdBy } = req.body;
  const checkUserQuery = `SELECT * FROM users WHERE id='${createdBy}'`;
  connection.execute(checkUserQuery, (error, result) => {
    if (error) {
      return res.json({ error });
    }
    if (result.length === 0) {
      return res.json({ message: "user not exist" });
    }
    const addNoteQuery = `INSERT INTO notes (title,description,createdBy) VALUES ('${title}','${description}','${createdBy}')`;
    connection.execute(addNoteQuery, (error, data) => {
      if (error) {
        return res.json({ error });
      }
      res.status(201).json({ message: "note added successfully" });
    });
  });
};

// get all notes
export const getAllNotes = (req, res) => {
  const getAllNotesQuery = `SELECT * FROM notes`;
  connection.execute(getAllNotesQuery, (error, result) => {
    if (error) {
      return res.json({ error });
    }
    if (result.length === 0) {
      return res.json({ message: "there aren't any notes" });
    }
    res.json({ message: "success", notes: result });
  });
};

// get note by user
export const getNoteByUser = (req, res) => {
  const { id } = req.params;
  const getAllNotesQuery = `SELECT * FROM notes WHERE createdBy = '${id}'`;
  connection.execute(getAllNotesQuery, (error, result) => {
    if (error) {
      return res.json({ error });
    }
    if (result.length === 0) {
      return res.json({ message: "the user doesn't exist" });
    }
    res.json({ message: "success", note: result });
  });
};
