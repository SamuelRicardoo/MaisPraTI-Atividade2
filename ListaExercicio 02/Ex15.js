const entrada = require('prompt-sync')();

function isPar(numero){
    return numero % 2 ==0; 
}

var vetor = [];

for (let i = 1; i <= 10; i++) {
   vetor[i] = parseInt(entrada("Digite um numero: "))
}

console.log("Valores dos números pares e sua posição")
for (let i = 1; i <= vetor.length; i++) {
    if(isPar(vetor[i])){
        console.log("O numero: "+vetor[i]+ ", posição: "+i)
    }
}