function testFunction() {
  console.log("hello");
  console.warn('warning');
  console.error('test error');
  console.error(new Error('constructing error'));

  const print = require("./eventloop");
  print.PrintSomething();

  const cmd = process.argv[2]; // command line argument
  process.argv.forEach((val, index) => {
    console.log(`${val}: ${index}`);
  });


  if (cmd) {
    console.log(cmd);
  }

  const readline = require('readline');

  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let query = 'what is your name \n';

  r1.question(query, (answer) => {
    console.log(`hello ${answer}`);

    r1.close();
  });
}

function traceFunction(){
  console.trace('lets trace it');
}
module.exports = {testFunction,traceFunction};
