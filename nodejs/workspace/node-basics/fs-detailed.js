const fs = require("fs").promises;

async function fsDetails() {
  const filePath = __filename;
  console.log(filePath);
  const result = await getStats(filePath);
  let info = `is a file ${result.isFile()} is a dir ${result.isDirectory()}}`;
//   console.log(result);
  console.log(info);
  const newFile = __dirname + '\\sample.txt';
  const data= 'some test data';
  writeToAFile(newFile,data);

  getStats(newFile);

  try {
    fs.unlink(newFile);
  } catch (error) {
    console.log(`can't unlink ${newFile}`);
  }
  
}

const getStats = async (path) => {
  try {
    const stats = await fs.stat(path);
    const content = await fs.readFile(path, "utf-8");
    console.log(content);
    // console.log(stats);
    return stats;
  } catch (error) {
    console.log("error in reading file stats ", error);
  }
};

const writeToAFile = async (path, data) => {
  try {
    await fs.writeFile(path, data);
  } catch (error) {
    console.log("error in writing content", error);
  }
};

module.exports = { fsDetails };
