const fs = require("fs");
const path = require("path");

function writeDataFile() {
  const filePath = path.join(__dirname, "file.txt");
  fs.writeFileSync(filePath, "We will not miss the exam next time");
}
