const entrada = require('prompt-sync')();

function diasPerdida (cigarroDia, anoDeFumo){

    var minutosFumado = cigarroDia * 10 * (365 * anoDeFumo);
    var diasPerdida = minutosFumado / 1440
    return diasPerdida;
}

var cigarroDia = parseInt(entrada("Quantos cigarro por dia você fuma?"));
var anoDeFumo = parseInt(entrada("Quantos anos você fuma?"));


var tempoPerdido = diasPerdida(cigarroDia,anoDeFumo);

console.log("Você perdeu aproximadamente " + Math.round(tempoPerdido) + " dias de vida devido ao hábito de fumar.");