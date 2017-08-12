var http = require('http');
var url = require('url');
var querystring = require('querystring');

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    //Para tomar los parametros desde la url se usa query en vez de pathname
    console.log("Request for " + pathname + " received");
    //Busqueda por parametros desde la URL
    var loquesea = querystring.parse(url.parse(request.url).query)["foo"];
    console.log(loquesea);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.startserver = start;

// URL de prueba http://localhost:8888/start?foo=bar&hello=world
