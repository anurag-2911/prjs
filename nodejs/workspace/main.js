const { testFunction, traceFunction } = require("./node-basics/testFunction");
const { aboutConsoles } = require("./node-basics/console");
const { logMessage } = require("./lib/logger/logger");
const { testBuffer } = require("./lib/buffer");
const { eventsTest } = require("./node-basics/events");
const { fileSystem } = require("./node-basics/FileSystem");
const { processbasics } = require("./node-basics/process");
const {httpTest} = require('./lib/http/http');
const {fsDetails} = require("./node-basics/fs-detailed");
const main = () => {
  fsDetails();
  // httpTest();
  // processbasics();
//   osbasics();
  // fileSystem();
  // console.log(global);
  // eventsTest();
  // testBuffer();
  // logMessage('starting');
  // aboutConsoles();
  // testFunction();
  // traceFunction();
};
main();

module.exports = { main };
function osbasics() {
  const os = require("os");
  console.log("Architecture:", os.arch(), "\n");
  console.log("CPUs:", os.cpus(), "\n");
  console.log("Network interfaces:", os.networkInterfaces(), "\n");
  console.log("Platform:", os.platform(), "\n");
  console.log("Release number:", os.release(), "\n");
  console.log("User info:", os.userInfo(), "\n");
}
