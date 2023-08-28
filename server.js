const http = require("http");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log("request made");
});

server.listen(3003, "localhost", () => {
  console.log("listening on port ");
});
