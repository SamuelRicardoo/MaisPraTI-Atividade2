const entrada = require('prompt-sync')();

function multa(velocidade, valorPorKm){

    if(velocidade > 80){
        
        var acima = velocidade - 80;
        
        var aPagar = acima * valorPorKm;

        return "Você está acima do permitido o valor da multa é: "+aPagar+ " R$"; 
    }else{
        return "Você está dentro do limite permitido"
    }
}

var velocidade = parseInt(entrada("Qual a velocidade do seu carro?"))
valorPorKm = 5;

console.log(multa(velocidade,valorPorKm))