const entrada = require('prompt-sync')();

function resultado(jogador1,jogador2){

    if (jogador1 === jogador2) {
        return "Empate!";
    } else if (
        (jogador1 === "PEDRA" && jogador2 === "TESOURA") ||
        (jogador1 === "PAPEL" && jogador2 === "PEDRA") ||
        (jogador1 === "TESOURA" && jogador2 === "PAPEL")
    ) {
        return "Jogador 1 venceu!";
    } else {
        return "Jogador 2 venceu!";
    }
}

var jogador1 = String(entrada("Escolha entre : (PEDRA, PAPEL E TESOURA)")).toUpperCase();
var jogador2 = String(entrada("Escolha entre : (PEDRA, PAPEL E TESOURA)")).toUpperCase();

console.log(resultado(jogador1,jogador2))