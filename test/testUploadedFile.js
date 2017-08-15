const fileManager = require('../program1/fileManager');
const chai = require('chai');
var fs = require('fs');
var path = require('path');
var datos; //Variable global para los datos dentro de números.txt
var rs;

describe('El archivo que se sube al servidor', () => {
  it('Se espera que el archivo de entrada sea un txt', () => {
    //Debe existir un archivo llamado numeros.txt
    if (fs.existsSync('temp/numeros.txt')) {
        var txt = 'numeros.txt';
    } else {var txt = 'nada.txt'}
    chai.expect(txt).to.equal('numeros.txt');
  });
  it('números.txt Debería contener números', () => {
    //Falta poner un if exists con fs.exists(path, callback)
    var text = fs.readFileSync('temp/numeros.txt','utf8');
    console.log("Datos en el archivo numeros.txt " + text);
    chai.expect(text).to.not.be.null; //que no sea null
    //chai.expect(text).to.be.not.undefined; //que no sea indefinido
    //chai.expect(text).to.be.equals('1,2,3\n');
  });
  //it...
});
