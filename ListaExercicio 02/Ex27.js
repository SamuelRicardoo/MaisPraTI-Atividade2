// Função para multiplicar uma matriz por um valor e armazenar o resultado em um vetor
function multiplicarMatrizPorValor(matriz, valor) {
    let vetor = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            vetor.push(matriz[i][j] * valor);
        }
    }
    return vetor;
}

let matriz = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];


let A = 2;

// Chama a função para multiplicar a matriz pelo valor A
let vetorResultado = multiplicarMatrizPorValor(matriz, A);

// Exibe o vetor resultado
console.log("Vetor V resultante:");
console.log(vetorResultado);
