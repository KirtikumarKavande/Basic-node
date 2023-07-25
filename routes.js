const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(`<body>${data}</body>`);
      res.write(
        "<body><form action='/message'method='POST'> <input type='text'  name='message' > <button type='submit' >send</button>   </form></body>"
      );
      res.write("<html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();

      const message = parsedData.split("=")[1];
      console.log(message);
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("location", "/");
      return res.end();
    });
  }
};
// module.exports = { handler: requestHandler, myText: "kirtikumar" };
exports.handler = requestHandler;
exports.myText = "kirtikumar";
