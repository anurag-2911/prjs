const EventEmitter = require('events');

const myEmitter= new EventEmitter();

myEmitter.on('log',(data)=>{
    console.log(data);
})
for (let index = 0; index < 10; index++) {
    let randomNUmber = Math.random();
    myEmitter.emit('log',randomNUmber);
    
}



