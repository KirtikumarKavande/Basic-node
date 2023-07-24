const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message'method='POST'> <input type='text'  name='message' > <button type='submit' >send</button>   </form></body>"
    );
    res.write("<html>");
    return res.end();
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();

      const message = parsedData.split("=")[1];
      console.log(message);
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("location", "/");
    return res.end();
  }
});
server.listen(4000);
