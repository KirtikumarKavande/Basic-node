const http = require("http");

const server = http.createServer((req, res) => {
  url = req.url;
  if (url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body><h1>welcome to home</h1></body>");
    res.write("<html>");
    return res.end();
  } else if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>About</title></head>");
    res.write("<body><h1>welcome to About Us page</h1></body>");
    res.write("<html>");
    return res.end();
  } else if (url === "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node</title></head>");
    res.write("<body><h1>welcome to Node Page</h1></body>");
    res.write("<html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page</title></head>");
  res.write("<body><h1>hello from node js</h1></body>");
  res.write("<html>");
  res.end();
});
server.listen(4000);
