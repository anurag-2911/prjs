const dgram = require("dgram");

const server = dgram.createSocket("udp4");

const port = 3500;

server.on("listening", () => {
  console.log("server is listening ", port);
});

server.on("message", (data, rinfo) => {
  console.log(`message from client ${data} from ${rinfo}`);
  server.send("hello from server");
});

server.on("close", (err) => {
  if (err) {
    console.log("closed ", err);
  } else {
    console.log("client connection closed");
  }
});
server.bind();