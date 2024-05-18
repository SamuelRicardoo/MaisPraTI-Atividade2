const entrada = require('prompt-sync')();

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    let nome = entrada("Digite o nome da pessoa: ");
    nomes.push(nome);

    let idade = parseInt(entrada("Digite a idade de " + nome + ": "));
    idades.push(idade);
}

console.log("\nListagem das pessoas menores de idade:");
for (let i = 0; i < nomes.length; i++) {
    if (idades[i] < 18) {
        console.log("Nome:", nomes[i], "- Idade:", idades[i]);
    }
}