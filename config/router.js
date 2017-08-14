function route(pathname, handle, request, response) {
  console.log("About to route to: " + pathname);
  // Si handle para la ruta especifica es una funcion, ejecutela
  if (typeof handle[pathname] === 'function') {
    // El handle adecuado mostrara la respuesta adecuada
    handle[pathname](request, response);
  } else {
    // La ruta no es valida con las especificadas en index.js
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 WTF r u doin'?");
    response.end();
  }
}

// exports.route (Este es el nombre de la funcion en otros lados)
// = route (Nombre de la funcion en este modulo)
exports.route = route;
