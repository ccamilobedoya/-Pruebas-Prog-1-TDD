const calcular = require('../program1/calcular');
const chai = require('chai');
var fs = require('fs');
var path = require('path');

describe('El modulo Calcular', () => {
  it('Deberia tener una funcion que calcule la media de los datos', () => {
    chai.expect(calcular.calcularMedia).to.be.a('function');
  });
  it('Deberia tener una funcion que calcule la desviación estandar de los datos', () => {
    chai.expect(calcular.calcularDesviacion).to.be.a('function');
  });
});
