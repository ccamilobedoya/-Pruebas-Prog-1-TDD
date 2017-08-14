var formidable = require('formidable');
var util = require('util');

function start(request, response) {
  console.log("Request handler 'start' called");
  response.writeHead(200, {"Content-Type": "text/html"});
  // Formulario con campo de subir archivo
  response.write(
  '<form action="/upload" enctype="multipart/form-data" method="post">'+
   '<input type="text" name="title"><br>'+
   '<input type="file" name="upload" multiple="multiple"><br>'+
   '<input type="submit" value="Upload">'+
  '</form>'
  );
  response.end();
}

function upload(request, response) {
  console.log("Request handler 'start' called");
  if (request.method.toLowerCase() == 'post'){
    // Documentacion de formidable
    // https://www.npmjs.com/package/formidable
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = "./temp";

    form.parse(request, function(err, fields, files) {
      response.writeHead(200, {'content-type': 'text/plain'});
      response.write('received upload:\n\n');
      response.end(util.inspect({fields: fields, files: files}));
    });
  }
}


exports.start = start;
exports.upload = upload;
