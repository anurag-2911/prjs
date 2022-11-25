const { testFunction, traceFunction } = require("./node-basics/testFunction");
const { aboutConsoles } = require("./node-basics/console");
const { logMessage } = require('./lib/logger/logger');
const {testBuffer} = require('./lib/buffer');

const main = () => {
    testBuffer();
    // logMessage('starting');
    // aboutConsoles();
    // testFunction();
    // traceFunction();
};
main();

module.exports = {main};