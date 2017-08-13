const server = require('../server');
const expect = require('chai').expect;

// El () => {} es equivalente a: function () { }

// Pruebas estilo BDD (En resumen: Lenguaje que cualquier entienda)
// Describe es el que cosa estamos probando
describe('El modulo servidor', () => {
  // It es que parte especifica es lo que se prueba
  it('Deberia exportar una funcion de inicio', () => {
    // Assert
    expect(server.startserver).to.be.a('function');
  });
});
