function httpTest() {
  const http = require("http");

  const hostname = "localhost";
  const port = 6600;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("Hello World");
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

module.exports = { httpTest };
