var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
var path = require('path');

function handleUpload(request, response) {
  if (request.method.toLowerCase() == 'post'){
    // Documentacion de formidable
    // https://www.npmjs.com/package/formidable
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = "./temp";
    form.keepExtensions = true;
    form.multiples = false;

    // Recibe el archivo enviado por post
    form.parse(request, function(err, fields, files) {
      response.writeHead(200, {'content-type': 'text/plain'});
      response.write('received upload:\n\n');
      response.end(util.inspect({fields: fields, files: files}));
    });
    // Cuando termina de subir el archivo, le cambia el nombre
    form.on('file', function(name, file) {
      // Resolve devuelve la ruta absoluta desde una ruta relativa
      fs.rename(path.resolve('./', file.path), path.resolve('./temp') + '/numeros.txt', function(err) {
        if ( err ) console.log('ERROR: ' + err);
      });
    });
  }
}

exports.handleUpload = handleUpload;
