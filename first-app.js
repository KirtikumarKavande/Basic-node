const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes.handler);
console.log(routes.myText)
server.listen(4000);
