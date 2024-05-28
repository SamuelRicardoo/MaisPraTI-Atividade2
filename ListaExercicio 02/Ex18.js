const prompt = require('prompt-sync')();

let registro = {
    nome: "",
    cargo: "",
    salario: 0.0
};

registro.nome = prompt("Digite o nome do funcionário: ");
registro.cargo = prompt("Digite o cargo do funcionário: ");
registro.salario = parseFloat(prompt("Digite o salário do funcionário: "));

console.log("\nRegistro do funcionário:");
console.log("Nome:", registro.nome);
console.log("Cargo:", registro.cargo);
console.log("Salário:", registro.salario);