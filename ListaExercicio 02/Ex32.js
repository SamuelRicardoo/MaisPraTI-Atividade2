function dividirPorMaiorElemento(matriz) {
    let matrizModificada = [];

    for (let i = 0; i < matriz.length; i++) {
        let maiorElemento = Math.max.apply(null, matriz[i].map(Math.abs)); 
        let linhaModificada = matriz[i].map(elemento => elemento / maiorElemento); 
        matrizModificada.push(linhaModificada);
    }

    console.log("Matriz M(12,13) original:");
    console.log(matriz);

    console.log("\nMatriz modificada - elementos divididos pelo maior em módulo de cada linha:");
    console.log(matrizModificada);
}

let matriz = [
    [1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13],
    [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13],
    [2, -4, 6, -8, 10, -12, 14, -16, 18, -20, 22, -24, 26],
    [-2, 4, -6, 8, -10, 12, -14, 16, -18, 20, -22, 24, -26],
    [3, -6, 9, -12, 15, -18, 21, -24, 27, -30, 33, -36, 39],
    [-3, 6, -9, 12, -15, 18, -21, 24, -27, 30, -33, 36, -39],
    [4, -8, 12, -16, 20, -24, 28, -32, 36, -40, 44, -48, 52],
    [-4, 8, -12, 16, -20, 24, -28, 32, -36, 40, -44, 48, -52],
    [5, -10, 15, -20, 25, -30, 35, -40, 45, -50, 55, -60, 65],
    [-5, 10, -15, 20, -25, 30, -35, 40, -45, 50, -55, 60, -65],
    [6, -12, 18, -24, 30, -36, 42, -48, 54, -60, 66, -72, 78],
    [-6, 12, -18, 24, -30, 36, -42, 48, -54, 60, -66, 72, -78]
];

dividirPorMaiorElemento(matriz);