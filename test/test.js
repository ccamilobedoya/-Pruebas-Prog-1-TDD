const server = require('../config/server');
const chai = require('chai');

// El () => {} es equivalente a: function () { }

// Pruebas estilo BDD (En resumen: Lenguaje que cualquier entienda)
// Describe es el que cosa estamos probando
describe('El modulo servidor', () => {
  // It es que parte especifica es lo que se prueba
  it('Deberia exportar una funcion de inicio', () => {
    // Assert
    chai.expect(server.startserver).to.be.a('function');
  });
});
