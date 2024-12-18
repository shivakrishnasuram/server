const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors()); 
app.use(express.json()); 
app.post("/register", (req, res) => {
  const { username, gmail, password } = req.body;
  if (username && gmail && password) {
    return res.status(200).json({
      message: "Registration successful",
      user: { username, gmail },
    });
  }
  return res.status(400).json({ message: "All fields are required" });
});
app.post("/login", (req, res) => {
  const { gmail, password } = req.body;
  if (gmail && password) {
    return res.status(200).json({
      message: "Login successful",
      user: { gmail },
    });
  }
  return res.status(400).json({ message: "Invalid credentials" });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
