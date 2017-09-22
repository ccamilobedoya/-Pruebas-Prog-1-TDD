var http = require('http');
var url = require('url');
var querystring = require('querystring');
var port = process.env.PORT || 8888;

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    //Para tomar los parametros desde la url se usa query en vez de pathname
    console.log("Request for " + pathname + " received");
    //Busqueda por parametros desde la URL
    var params = querystring.parse(url.parse(request.url).query)["foo"];
    console.log("foo: " + params);

    // route es una funcion pasada por parametro, handle un objeto
    // response es el mismo del servidor, asi que router se encargara
    route(pathname, handle, request, response);  
  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started in http://localhost:" + port);
}

exports.startserver = start;

// URL de prueba http://localhost:8888/start?foo=bar&hello=world
