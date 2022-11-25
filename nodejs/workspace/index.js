const { testFunction,traceFunction } = require("./node-basics/testFunction");
const {aboutConsoles} = require("./node-basics/console");
const {logMessage} = require('./lib/logger/logger');

const fn=()=>{
    logMessage('starting');
    aboutConsoles();
    testFunction();
    traceFunction();
}

fn();


