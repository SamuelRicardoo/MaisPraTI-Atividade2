function calculoDeducao(salarioBruto){

    return salarioBruto* 0.12;
}

let funcionarios = [
    { matricula: 1, nome: "Jamal", salarioBruto: 2000.00 },
    { matricula: 2, nome: "Maria", salarioBruto: 2500.00 },
    { matricula: 3, nome: "João", salarioBruto: 3000.00 },
    { matricula: 4, nome: "Ana", salarioBruto: 3500.00 },
    { matricula: 5, nome: "Pedro", salarioBruto: 4000.00 },
    { matricula: 6, nome: "Mariana", salarioBruto: 2200.00 },
    { matricula: 7, nome: "José", salarioBruto: 2600.00 },
    { matricula: 8, nome: "Carla", salarioBruto: 3100.00 },
    { matricula: 9, nome: "Lucas", salarioBruto: 3600.00 },
    { matricula: 10, nome: "Fernanda", salarioBruto: 4100.00 },
    { matricula: 11, nome: "Rafael", salarioBruto: 2300.00 },
    { matricula: 12, nome: "Aline", salarioBruto: 2700.00 },
    { matricula: 13, nome: "Gustavo", salarioBruto: 3200.00 },
    { matricula: 14, nome: "Camila", salarioBruto: 3700.00 },
    { matricula: 15, nome: "Rodrigo", salarioBruto: 4200.00 },
    { matricula: 16, nome: "Marta", salarioBruto: 2400.00 },
    { matricula: 17, nome: "Paulo", salarioBruto: 2800.00 },
    { matricula: 18, nome: "Bianca", salarioBruto: 3300.00 },
    { matricula: 19, nome: "Fábio", salarioBruto: 3800.00 },
    { matricula: 20, nome: "Sandra", salarioBruto: 4300.00 },
    { matricula: 21, nome: "Luiz", salarioBruto: 2500.00 },
    { matricula: 22, nome: "Larissa", salarioBruto: 2900.00 },
    { matricula: 23, nome: "Diego", salarioBruto: 3400.00 },
    { matricula: 24, nome: "Vanessa", salarioBruto: 3900.00 },
    { matricula: 25, nome: "Henrique", salarioBruto: 4400.00 },
    { matricula: 26, nome: "Juliana", salarioBruto: 2600.00 },
    { matricula: 27, nome: "Ricardo", salarioBruto: 3000.00 },
    { matricula: 28, nome: "Alice", salarioBruto: 3500.00 },
    { matricula: 29, nome: "Cesar", salarioBruto: 4000.00 },
    { matricula: 30, nome: "Isabela", salarioBruto: 4500.00 },
    { matricula: 31, nome: "Marcos", salarioBruto: 2700.00 },
    { matricula: 32, nome: "Leticia", salarioBruto: 3100.00 },
    { matricula: 33, nome: "Eduardo", salarioBruto: 3600.00 },
    { matricula: 34, nome: "Patricia", salarioBruto: 4100.00 },
    { matricula: 35, nome: "Roberto", salarioBruto: 4600.00 },
    { matricula: 36, nome: "Silvia", salarioBruto: 2800.00 },
    { matricula: 37, nome: "Luciana", salarioBruto: 3200.00 },
    { matricula: 38, nome: "Felipe", salarioBruto: 3700.00 },
    { matricula: 39, nome: "Amanda", salarioBruto: 4200.00 },
    { matricula: 40, nome: "Renato", salarioBruto: 4700.00 },
    { matricula: 41, nome: "Tatiana", salarioBruto: 2900.00 },
    { matricula: 42, nome: "Marcelo", salarioBruto: 3300.00 },
    { matricula: 43, nome: "Viviane", salarioBruto: 3800.00 },
    { matricula: 44, nome: "Gustavo", salarioBruto: 4300.00 },
    { matricula: 45, nome: "Monica", salarioBruto: 4800.00 },
    { matricula: 46, nome: "Renata", salarioBruto: 3000.00 },
    { matricula: 47, nome: "Bruno", salarioBruto: 3400.00 },
    { matricula: 48, nome: "Carolina", salarioBruto: 3900.00 },
    { matricula: 49, nome: "Robson", salarioBruto: 4400.00 },
    { matricula: 50, nome: "Natália", salarioBruto: 4900.00 },
    { matricula: 51, nome: "Marina", salarioBruto: 3100.00 },
    { matricula: 52, nome: "Rafaela", salarioBruto: 3500.00 },
    { matricula: 53, nome: "Guilherme", salarioBruto: 4000.00 },
    { matricula: 54, nome: "Leandro", salarioBruto: 4500.00 },
    { matricula: 55, nome: "Teresa", salarioBruto: 5000.00 },
    { matricula: 56, nome: "Cintia", salarioBruto: 3200.00 },
    { matricula: 57, nome: "Fernando", salarioBruto: 3600.00 },
    { matricula: 58, nome: "Ramon", salarioBruto: 4100.00 },
    { matricula: 59, nome: "Luisa", salarioBruto: 4600.00 },
    { matricula: 60, nome: "Ana Paula", salarioBruto: 5100.00 },
    { matricula: 61, nome: "Gabriel", salarioBruto: 3300.00 },
    { matricula: 62, nome: "Simone", salarioBruto: 3700.00 },
    { matricula: 63, nome: "Fernando", salarioBruto: 4200.00 },
    { matricula: 64, nome: "Patricia", salarioBruto: 4700.00 },
    { matricula: 65, nome: "Mariana", salarioBruto: 5200.00 },
    { matricula: 66, nome: "Raphael", salarioBruto: 3400.00 },
    { matricula: 67, nome: "Lucas", salarioBruto: 3800.00 },
    { matricula: 68, nome: "Carla", salarioBruto: 4300.00 },
    { matricula: 69, nome: "Roberta", salarioBruto: 4800.00 },
    { matricula: 70, nome: "Vanessa", salarioBruto: 5300.00 },
    { matricula: 71, nome: "Marcio", salarioBruto: 3500.00 },
    { matricula: 72, nome: "Marcela", salarioBruto: 3900.00 },
    { matricula: 73, nome: "Luiz", salarioBruto: 4400.00 },
    { matricula: 74, nome: "Rita", salarioBruto: 4900.00 },
    { matricula: 75, nome: "Camila", salarioBruto: 5400.00 },
    { matricula: 76, nome: "Paulo", salarioBruto: 3600.00 },
    { matricula: 77, nome: "Sandra", salarioBruto: 4000.00 },
    { matricula: 78, nome: "Marcelo", salarioBruto: 4500.00 },
    { matricula: 79, nome: "Monica", salarioBruto: 5000.00 },
    { matricula: 80, nome: "Felipe", salarioBruto: 5500.00 }
];
console.log("\nContracheques:");

for (const funcionario of funcionarios) {
    var deducao = calculoDeducao(funcionario.salarioBruto);
    var salarioLiquido = funcionario.salarioBruto - deducao;
    
    console.log("Matrícula:", funcionario.matricula);
    console.log("Nome:", funcionario.nome);
    console.log("Salário bruto:", funcionario.salarioBruto.toFixed(2));
    console.log("Dedução INSS:", deducao.toFixed(2));
    console.log("Salário líquido:", salarioLiquido.toFixed(2));

    console.log("----------------------------------------------------------------")
}