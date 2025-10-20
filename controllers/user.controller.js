import connection from "../connection.js";

// sign up
export const signup = (req, res) => {
  const { name, email, password, age } = req.body;

  //   check for email
  const checkEmailQuery = `SELECT * FROM users WHERE email = '${email}'`;

  connection.execute(checkEmailQuery, (error, result) => {
    if (error) {
      return res.json({ error });
    }
    if (result.length) {
      return res.json({ message: "email already exist" });
    }

    // add query
    const addQuery = `INSERT INTO users (name,email,password,age) VALUES ('${name}','${email}','${password}','${age}')`;

    connection.execute(addQuery, (error, result, field) => {
      if (error) {
        return res.json({ error });
      }
      console.log(res);
      res.status(201).json({ message: "added" });
    });
  });
};

// sign in
export const signin = (req, res) => {
  const { email, password } = req.body;
  const checkForUser = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;
  connection.execute(checkForUser, (error, result) => {
    if (error) {
      return res.json({ error });
    }
    if (result.length === 0) {
      return res.json({
        message: "incorrect email or password",
      });
    }
    res.json({
      message: "user signin successfully",
      user: result,
    });
  });
};
