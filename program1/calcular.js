var math = require('mathjs');

function calcularMedia (arr, response, callback) {
  var media = [];
  var aux =0;
  for (i = 0; i < arr[0].length; i++) {
    var sum = 0;
    for (j = 0; j < arr.length; j++) {
      sum += parseFloat(arr[j][i]);
    }

    aux=sum/arr.length;
    media[i]=aux;
  }
  // Asi se retorna el objeto en donde se llama
  callback(media);

}


function calcularDesviacion (arr, arr2, response, callback) {
  var desviacion = [];

  for (i = 0; i < arr[0].length; i++) {
    var aux1 =0;
    var aux2 =0;
    var sum =0;
    for (j = 0; j < arr.length; j++) {
      aux1 = (arr[j][i]-arr2[i]);
      arr[j][i]=math.pow(aux1,2);
    }

    for (j = 0; j < arr.length; j++) {
      sum += parseFloat(arr[j][i]);
    }
    aux1=sum/(arr.length-1);
    aux2= math.sqrt(aux1);
    desviacion[i]=aux2;
  }

  // Asi se retorna el objeto en donde se llama
  callback(desviacion);

}
exports.calcularMedia = calcularMedia;
exports.calcularDesviacion = calcularDesviacion;
