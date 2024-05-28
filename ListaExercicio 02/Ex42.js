let dados = {
    nome: "Josue",
    idade: 25,
    hobbies: ["programar", "jogar futebol", "ler"],
    notas: [10, 9, 8],
    endereco: {
        rua: "Rua Principal",
        numero: 123
    },
    ativo: true
};

function filtrarArrays(obj) {
    let resultado = {};
    for (let propriedade in obj) {
        if (Array.isArray(obj[propriedade])) {
            resultado[propriedade] = obj[propriedade];
        }
    }
    return resultado;
}

let arraysSomente = filtrarArrays(dados);
console.log(arraysSomente);
