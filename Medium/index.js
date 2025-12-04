const express = require("express");
const fs = require("fs");
const path = require("path");
const checkFileAccess = require("./middleware");

const app = express();

app.get("/data/:user", checkFileAccess, (req, res) => {
  const filePath = path.join(__dirname, "data.txt");
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    res.status(200).json({ message: content });
  } catch (err) {
    res.status(500).json({ message: "Error reading file" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
