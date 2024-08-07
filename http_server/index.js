const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.url} New Req Recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("This is the about page");
        break;
      default:
        res.end("404 Error");
        break;
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server started ....");
});
