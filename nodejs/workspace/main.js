const { testFunction, traceFunction } = require("./node-basics/testFunction");
const { aboutConsoles } = require("./node-basics/console");
const { logMessage } = require('./lib/logger/logger');

const main = () => {
    logMessage('starting');
    aboutConsoles();
    testFunction();
    traceFunction();
};
main();

module.exports = {main};