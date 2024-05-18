const entrada = require('prompt-sync')();

var primeiroTermo = parseInt(entrada("Digite o primeiro termo da PA: "))
var razao = parseInt(entrada("Digite a razao da PA"))

var soma=0;
var termos=[];

console.log("Os 10 primeiros termos da PA são:");

for (let i = 0; i < 10; i++) {
    
    var termo = parseInt(primeiroTermo) + i * parseInt(razao);
    
    termos.push(termo)
    console.log(termo)
    soma+= termo;
}

console.log("A soma dos 10 primeiros termos da PA é: " + soma);