const entrada = require('prompt-sync')();

function precoPassagem(distancia){

    if(distancia > 200){
        
        var valorFinal = distancia * 0.45;

        return "O valor a pagar pela viagem de: "+valorFinal+ " R$"; 
    }else{

        var valorFinal = distancia * 0.50;

        return "O valor a pagar pela viagem de: "+valorFinal+ " R$"
    }
}

var distancia = parseInt(entrada("Qual a distancia que você deseja percorrer?"))

console.log(precoPassagem(distancia))