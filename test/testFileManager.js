const fileManager = require('../program1/fileManager');
const chai = require('chai');

describe('El modulo Gestor de Archivos', () => {
  it('Deberia tener una funcion que maneje la subida del archivo .csv', () => {
    chai.expect(fileManager.handleUpload).to.be.a('function');
  });
  it('Deberia tener una funcion que controle los datos dentro del archivo .csv', () => {
    chai.expect(fileManager.parseFile).to.be.a('function');
  });

  describe('Al obtener el archivo .csv', function() {
    it ('Se debe retornar una matriz', function() {
      var data;
      var str = "123, 456\n789,0";
      str = str.toString();
      fileManager.parseFile(str, function(cbData) {
        data = cbData;
      });
      chai.expect(data).to.be.an('array');
    });
    it ('La matriz no debe estar vacia', function() {
      var data;
      var str = "123, 456\n789,0";
      str = str.toString();
      fileManager.parseFile(str, function(cbData) {
        data = cbData;
      });
      chai.expect(data).to.be.an('array').that.is.not.empty;
    });
  });
  /*it('Deberia contener un array para calcular la media y la desviación estandar', () => {
    chai.expect(fileManager.parseFile).to.be.a('array');
  });*/
});
