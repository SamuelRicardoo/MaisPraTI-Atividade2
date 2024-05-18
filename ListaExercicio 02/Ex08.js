function pontosHora (horaAtividade){


    if(Number.isInteger(horaAtividade)){

        var valorTotal;

        if(horaAtividade >= 10){

            valorTotal = 0.5* (horaAtividade * 2)

        }else if (horaAtividade<=20){

            valorTotal= 0.5 * (horaAtividade * 5)

        }else{

            valorTotal=  0.5 * (horaAtividade * 10)
        }

        return valorTotal;

    }else{

        return "Digite apenas numero inteiro!"
    }
}

console.log(pontosHora(5));   // Deve retornar 5
console.log(pontosHora(15));  // Deve retornar 37.5
console.log(pontosHora(25));  // Deve retornar 125
console.log(pontosHora(5.5)); // Deve retornar "Digite apenas numero inteiro!"
console.log(pontosHora("testeteste")) // Deve retornar "Digite apenas numero inteiro!"