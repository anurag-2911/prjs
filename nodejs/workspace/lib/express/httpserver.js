const express = require("express");
const deviceRouter = require("./routers/deviceDetails");
const serverFn = () => {
  const app = express();
  const port = 9999;

  app.use((req, res, next) => {
    const { method, path } = req;
    console.log(
      `new request to ${method} in ${path} at ${new Date().toISOString()}`
    );
    next();
  });

  app.use("/api/deviceinfo", deviceRouter);

  app.get("/", (req, res) => {
    // res.sendStatus(200);
    res.send("hello from express server");
  });

  app.get("/:name", (req, res) => {
    res.send(`hello ${req.params.name}`);
  });

  app.listen(port, () => {
    console.log("server is listening on the port ", port);
  });
};

serverFn();

module.exports = { serverFn };
