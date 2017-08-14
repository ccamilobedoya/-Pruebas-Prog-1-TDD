const fileManager = require('../program1/fileManager');

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
  fileManager.handleUpload(request, response);
}


exports.start = start;
exports.upload = upload;
