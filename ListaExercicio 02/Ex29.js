function calcularSomasEMostrarMatriz(matriz) {
    let somaLinha4 = 0;
    let somaColuna2 = 0;
    let somaDiagonalPrincipal = 0;
    let somaTotal = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            somaTotal += matriz[i][j];
            if (i === 3) { 
                somaLinha4 += matriz[i][j];
            }
            if (j === 1) { 
                somaColuna2 += matriz[i][j];
            }
            if (i === j) { 
                somaDiagonalPrincipal += matriz[i][j];
            }
        }
    }

    console.log("Matriz M(5,5):");
  

    console.log("\nSoma da linha 4:", somaLinha4);
    console.log("Soma da coluna 2:", somaColuna2);
    console.log("Soma da diagonal principal:", somaDiagonalPrincipal);
    console.log("Soma de todos os elementos:", somaTotal);
}


let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

calcularSomasEMostrarMatriz(matriz);
