// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Node.js from scratch!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
