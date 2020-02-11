// configuración de express
var express = require('express');
var app = express();

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});


// peticiones http
app.get('/saludo1', function (req, res) {
    res.send(test('Alejandro Rincon'));
  });

app.get('/saludo2', function (req, res) {
  res.send(test('Julian Rincon'));
});


// funciones adicionales
function test(nombre) {
    const n1 = 100;
    const n2 = 200;
    return 'Saludo 2 asdf: ' + nombre + '. La suma es: ' + calcularSuma(n1, n2);
}

function calcularSuma(n1, n2) {
    return n1 + n2;
}