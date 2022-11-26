const dgarm = require("dgram");

const client = dgarm.createSocket("udp4");

client.on("message", (msg, rinfo) => {
  console.log(`message from server ${msg} and ${rinfo}`);
});

client.send("hello from client", 3500, "localhost", (err) => {
  if (err) {
    console.log("some error", err);
  } else {
    console.log("message sent from client");
  }
});

client.on("end", () => {
  console.log("disconnected from server");
});
