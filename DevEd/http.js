const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" }); //metadata
      res.write(data);
      // res.write("<h1>Welcome to the HomePage!</h1>");
      res.end(); //close our response
    });
  }
  if (req.url === "/user") {
    res.write("Welcome User!");
    res.end(); //close our response
  }
  //   console.log(req);
});

server.listen(3000, () => {
  console.log("Server listening on port!! and running!");
}); //listening request
