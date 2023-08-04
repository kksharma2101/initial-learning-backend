const http = require("http");

const PORT = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("content-path", "text/plain");
    res.end("welcome to nodejs server");
  }
  if (req.url == "/home") {
    res.statusCode = 200;
    res.setHeader("content-path", "text/plain");
    res.end("this is Home page");
  }
  if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("content-path", "text/plain");
    res.end("this is about page");
  }
  if (req.url == "/product") {
    res.statusCode = 500;
    res.setHeader("content-path", "application/json");
    res.end(JSON.stringify({ error: "server error" }));
  }
});

server.listen(PORT, () => {
  console.log(`server is running at ${hostname}: ${PORT}`);
});
