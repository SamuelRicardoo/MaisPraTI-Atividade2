const entrada = require('prompt-sync')();

function pesoIdeal(sexo, altura) {
    var pesoIdeal;
    if (sexo === 'M') {
        pesoIdeal = 72.7 * altura - 58;
    } else if (sexo === 'F') {
        pesoIdeal = 62.1 * altura - 44.7;
    } else {
        return "Sexo inválido";
    }
    return pesoIdeal.toFixed(2);
}

var sexo = entrada("Qual o seu sexo (F/M): ").toUpperCase();
var altura = parseFloat(entrada("Qual a sua altura: "));

console.log(pesoIdeal(sexo, altura));