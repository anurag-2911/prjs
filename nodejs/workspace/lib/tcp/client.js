var net = require('net');

const client =net.connect({port:3500},()=>{
    console.log('connection established');
    client.write('hello from client');
});

client.on('data',((data)=>{
    console.log('got ',data.toString());
}));

client.on('close',((err)=>{
    if(err){
        console.log('got error',err)
    }
    else{
        console.log('connection closed');
    }
}));

client.on('end',(()=>{
    console.log('connection ended');
}))