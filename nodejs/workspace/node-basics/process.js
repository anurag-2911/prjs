function processbasics() {
  process.addListener("beforeExit", (x) => {
    console.log("before exit", x);
  });
  process.addListener("exit", (x) => {
    console.log("exiting", x);
  });
  process.addListener("uncaughtException", (x) => {
    console.log("uncaungh exception", x);
  });
  thisdoesnotexist();
}

module.exports = { processbasics };
