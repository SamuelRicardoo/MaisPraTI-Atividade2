const entrada = require('prompt-sync')();


var totalMulher = 0;
var totalHomem = 0;
var con = true;

while(con){

    var sexo = entrada("Digite o seu sexo (F ou M)").toUpperCase()
    
    if(sexo ==="F"){

        var salarioFeminino = parseFloat(entrada("Digite o salario: "))
        totalMulher+= salarioFeminino;

    }else if(sexo === "M"){

        var salarioMasculino = parseFloat(entrada("Digite o salario: "))
        totalHomem+=salarioMasculino
    }
    var resposta = entrada("Deseja continuar S/N").toUpperCase();
    if(resposta !== "S"){
        con = false;
    }
}

console.log("Total de salários de mulheres: ", totalMulher);
console.log("Total de salários de homens: ", totalHomem);