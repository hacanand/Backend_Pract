const http = require("http");
const PORT = 3000;
/**
 * http module contains a function called as createServer
 * this createServer function takes a callback function
 * now inside the callback function we have two parameters
 * 1. request ->this argument contains all the information about the request
 * 2. response-> this argument contains all the information about the response
 *
 * ports are the exact address of the the process in the computer
 * ip address is the address of the machine
 *
 */

const server = http.createServer(function exec(request, response) {
  if (request.url == "/home") {
    response.end("welcome to home page");
  } else if (request.url == "/faq") {
    response.end("list of frequently asked questions");
    }
  else {
      response.end("404 page not found")
    }
 
});
server.listen(PORT, function () {
  console.log("%c server is listening at ", "style:red;", PORT);
});
