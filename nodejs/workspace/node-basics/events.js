function eventsTest() {
  const EventEmitter = require("events");
  const emitter = new EventEmitter();

  const fun = (arg) => {
    console.log(" I am listening", arg);
  };
  const fun01=(arg)=>{
    console.log('i am also listening ',arg);
  }
  emitter.on("fired", fun);
  emitter.once('firedonce',fun01);
  for (let v = 0; v < 5; v++) {
    emitter.emit("fired", "hello listener");
    emitter.emit('firedonce',"aag!!!!");
  }
}

module.exports = { eventsTest };
