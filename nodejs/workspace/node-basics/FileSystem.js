function fileSystem() {
  
  const fs = require("fs");
  const path = require("path");
  const filePath = path.join(
    path.dirname(path.dirname(__filename)),
    "\\data",
    "\\test01.txt"
  );
  fileread(path, fs, filePath);
  writeFile(fs, filePath);
  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("file stats ", stats);
  });
}

function writeFile(fs, filePath) {
  fs.writeFile(filePath, "some more texts", fs.appendFile, (err) => {
    if (err) {
      console.log("error in write ", err);
    }
  });
}

function fileread(path, fs, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("error in reading file", err);
    }
    console.log(data.toString());
  });
  console.log("file read operation");
}

module.exports = { fileSystem };
