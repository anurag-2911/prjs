var net = require("net");

var server = net.createServer();
var port = 3500;
process.addListener('uncaughtException',((err)=>{
    console.log('uncaught exception ',err);
}))
server.on("connection", (socket) => {
  console.log("client request from", socket.remoteAddress, socket.remotePort);

  socket.write("hello from server");

  socket.on("data", (data) => {
    console.log("message from client ", data.toString());
  });

  socket.on("close", (err) => {
    if (err) {
      console.log("client closed due to error", err);
      return;
    }
    console.log("client closed");
  });
});

server.addListener("listening", () => {
  console.log("server is listening on port ", port);
});

server.listen(port);