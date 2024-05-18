const entrada = require('prompt-sync')();

function adivinha(valorSorteado){
    while (true){
        var numeroEscolhido = parseInt(entrada("Escolha um numero entre 1 a 5: "))

        if(valorSorteado == numeroEscolhido){
            break
        }else{
            console.log("Tente novamente!");
            continue;
        }
    }
    return "Parabéns, você acertou!"
}

var valorSorteado = Math.floor(Math.random() * 5) + 1;

console.log(adivinha(valorSorteado))