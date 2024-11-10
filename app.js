const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Route gốc
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

module.exports = app;