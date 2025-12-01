const http = require("http");

const requestHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hola Mundo desde DevOps CI/CD!");
};

const server = http.createServer(requestHandler);

module.exports = server;
