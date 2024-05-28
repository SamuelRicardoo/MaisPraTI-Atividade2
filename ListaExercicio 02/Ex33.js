function multiplicar(matriz) {
    let somaDiagonalSecundaria = 0;
    for (let i = 0; i < matriz.length; i++) {
        somaDiagonalSecundaria += matriz[i][matriz.length - i - 1];
    }
    let mediaDiagonalSecundaria = somaDiagonalSecundaria / matriz.length;
  
    let produto = 1;
    for (let i = 0; i < matriz.length; i++) {
        produto *= matriz[i][i] * mediaDiagonalSecundaria;
    }

    console.log("Matriz 3x3:");
    console.log(matriz);

    console.log("\nMédia dos elementos da diagonal secundária:", mediaDiagonalSecundaria);
    console.log("Produto dos elementos da diagonal principal pela média da diagonal secundária:", produto);
}

// Exemplo de matriz 3x3
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

multiplicar(matriz);
