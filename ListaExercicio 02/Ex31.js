function contarValoresEConstruirMatriz(A, matriz) {
    let contador = 0;
    let X = [];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === A) {
                contador++;
            } else {
                X.push(matriz[i][j]);
            }
        }
    }

    console.log("Número de valores iguais a A na matriz V:", contador);

    console.log("\nMatriz X contendo os elementos diferentes de A:");
    console.log(X);
}

let matriz = [];
for (let i = 0; i < 30; i++) {
    matriz[i] = [];
    for (let j = 0; j < 30; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10); 
    }
}

let A = 1; 

console.log("Matriz V(30,30):");
console.log(matriz);

contarValoresEConstruirMatriz(A, matriz);
