const http = require("http");

const port = 3000;
// IP address
const hostname = "127.0.0.1";
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    // no html or css file -->textplain
    res.setHeader("content-type", "text-plain");
    res.end("Hello");
  } else if (req.url === "/hello") {
    res.statusCode = 200;
    // no html or css file -->textplain
    res.setHeader("content-type", "text-plain");
    res.end("Thankyou for visting the server");
  } else {
    res.statusCode = 404;
    // no html or css file -->textplain
    res.setHeader("content-type", "text-plain");
    res.end("404 !! Noot Found");
  }
});
// takes 2 parametrs where you want to listen
server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname} : ${port}`);
  // server will run at host name
});
