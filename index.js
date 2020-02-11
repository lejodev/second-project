// configuración de express
var express = require('express');
var app = express();

// importar archivo externo
var saludos = require('./saludos');

// configuración de servidor http
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});


// peticiones http
app.get('/saludo1', function (req, res) {
  const nombre = 'Julian Rincon';
  const n1 = 10;
  const n2 = 20;
  const resultadoSaludo = saludos.saludo(nombre, n1, n2);
    res.send(resultadoSaludo);
  });

app.get('/saludo2', function (req, res) {
  res.send(saludos.otrafuncionPublica());
});