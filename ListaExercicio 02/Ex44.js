function contarStrings(obj) {
    let count = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            count++;
        }
    }
    return count;
}

let dados = {
    nome: "samuel",
    idade: 25,
    cidade: "Recife",
    email: "samuel@gmail.com",
    ativo: true
};

let numeroDeStrings = contarStrings(dados);
console.log(numeroDeStrings); 
