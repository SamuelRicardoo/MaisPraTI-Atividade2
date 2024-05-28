function criarVetoresSomas(matriz) {
    let SL = []; 
    let SC = []; 

    for (let i = 0; i < 5; i++) {
        SL.push(0);
        SC.push(0);
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            SL[i] += matriz[i][j];
            SC[j] += matriz[i][j];
        }
    }

    console.log("Matriz M(5,5):");
    console.log(matriz);

    console.log("\nVetor SL(5) - Somas das linhas:");
    console.log(SL);

    console.log("\nVetor SC(5) - Somas das colunas:");
    console.log(SC);
}

let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

criarVetoresSomas(matriz);
