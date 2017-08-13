function start(response) {
  console.log("Request handler 'start' called");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}


exports.start = start;
