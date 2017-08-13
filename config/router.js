function route(pathname, handle) {
  console.log("About to route to: " + pathname);
  // Si handle para la ruta especifica es una funcion, ejecutela
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
  }
}

// exports.route (Este es el nombre de la funcion en otros lados)
// = route (Nombre de la funcion en este modulo)
exports.route = route;
