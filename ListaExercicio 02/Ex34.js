function multiplicarLinhasPelaDiagonalPrincipal(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let elementoDiagonalPrincipal = matriz[i][i];
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] *= elementoDiagonalPrincipal;
        }
    }

    console.log("Matriz 50x50 após a multiplicação:");
    console.log(matriz);
}

let matriz = [];
for (let i = 0; i < 50; i++) {
    matriz[i] = [];
    for (let j = 0; j < 50; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10) + 1;
    }
}

multiplicarLinhasPelaDiagonalPrincipal(matriz);
