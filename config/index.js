const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

// Lista de funciones a ejecutar dependiendo de la ruta
var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;

server.startserver(router.route, handle);
