const express = require("express");
const app = express();
const path = require("path");
const PORT = 3500;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
