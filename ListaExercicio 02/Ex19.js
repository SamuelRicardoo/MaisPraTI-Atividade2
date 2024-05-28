const entrada = require('prompt-sync')();


function isValidar(horario){
    let regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    return regex.test(horario);
}

let horarios = [];

for (let i = 0; i < 5; i++) {
   
    do {
        var horario = entrada("digite o horario "+ i+1 + "(HH.MM.SS): ")
        if(!isValidar(horario)){
            console.log("Formato invalido")
        }

    } while (!isValidar(horario));
    horarios.push(horario);
}

console.log("Horários válidos:");
for (let i = 0; i < horarios.length; i++) {
    console.log(horarios[i]);
}