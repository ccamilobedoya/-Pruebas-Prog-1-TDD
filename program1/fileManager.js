var formidable = require('formidable');
var util = require('util');

function handleUpload(request, response) {
  if (request.method.toLowerCase() == 'post'){
    // Documentacion de formidable
    // https://www.npmjs.com/package/formidable
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = "./temp";
    form.keepExtensions = true;
    form.multiples = false;

    form.parse(request, function(err, fields, files) {
      response.writeHead(200, {'content-type': 'text/plain'});
      response.write('received upload:\n\n');
      response.end(util.inspect({fields: fields, files: files}));
    });
    /*form.on('error', function(err) {
      console.log('Error critico', err);
    });*/
  }
}

exports.handleUpload = handleUpload;
