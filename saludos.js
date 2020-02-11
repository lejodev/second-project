// métodos que se exportan (pueden se accesibles cuando se importan en otro archivo)
module.exports = {
    saludo: function(nombre, n1, n2) {
        return 'Bienvenido ' + nombre + ' La sume es ' + suma(n1, n2);
    },
    otrafuncionPublica: function() {
        return 'Otra función pública';
    }
};


// métodos privados del archivo saludos.js (solo se pueden usar dentro de este archivo)
var suma =  function(n1, n2) {
    return n1 + n2;
}