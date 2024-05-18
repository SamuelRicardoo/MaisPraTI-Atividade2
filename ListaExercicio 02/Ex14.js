const entrada = require('prompt-sync')();

var vetor = [];

for (let i = 0; i < 7; i++) {
   vetor[i] = entrada("Digite um nome:")
}

console.log("====PADRÃO====")
for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i])
}

console.log("====ORDEM INVERSA====")
for (let i = vetor.length - 1; i >=0; i--) {
    console.log(vetor[i])
}
