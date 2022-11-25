function aboutConsoles() {
  console.time("time taken");
  for (let index = 0; index < 10000; index++) {}
  console.timeEnd("time taken");
}

module.exports = { aboutConsoles };
