const entrada = require('prompt-sync')();

class Habitante {
    constructor(salario, numeroFilhos) {
        this.salario = salario;
        this.numeroFilhos = numeroFilhos;
    }
}

class PesquisaPrefeitura {
    constructor() {
        this.habitantes = [];
    }

    adicionarHabitante(habitante) {
        this.habitantes.push(habitante);
    }
}

function calcularEstatisticas() {
    let totalSalario = 0, maiorSalario = 0;
    let totalFilhos = 0, totalPessoas = this.habitantes.length;
    let pessoasAte350 = 0;

    for (let habitante of this.habitantes) {
        totalSalario += habitante.salario;
        totalFilhos += habitante.numeroFilhos;
        if (habitante.salario > maiorSalario) {
            maiorSalario = habitante.salario;
        }
        if (habitante.salario <= 350) {
            pessoasAte350++;
        }
    }

    let mediaSalario = totalSalario / totalPessoas;
    let mediaFilhos = totalFilhos / totalPessoas;
    let percentualAte350 = (pessoasAte350 / totalPessoas) * 100;

    return {
        mediaSalario: mediaSalario.toFixed(2),
        mediaFilhos: mediaFilhos.toFixed(2),
        maiorSalario: maiorSalario.toFixed(2),
        percentualAte350: percentualAte350.toFixed(2)
    };
}

let pesquisa = new PesquisaPrefeitura();

var con = true

while (con) {
    let salario = parseFloat(entrada("Salário:"));
    if (salario < 0) {
        break;
    }
    let numeroFilhos = parseInt(entrada("Número de filhos:"));
    let habitante = new Habitante(salario, numeroFilhos);
    pesquisa.adicionarHabitante(habitante);

    var resposta = entrada("Deseja continuar (S/N)").toUpperCase()
    if(resposta!== "S"){
        con = false
        break;
    }
}

let estatisticas = calcularEstatisticas.call(pesquisa)
console.log("Média de salário: " + estatisticas.mediaSalario);
console.log("Média de filhos: " + estatisticas.mediaFilhos);
console.log("Maior salário: " + estatisticas.maiorSalario);
console.log("Percentual de pessoas com salário até R$ 350,00: " + estatisticas.percentualAte350 + "%");