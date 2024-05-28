

var matriz = [
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, -2, -3, 4, 5, 6, 7, -8],
    [-1, 2, 3, 4, -5, -6, 7, 8],
    [1, 2, 3, -4, -5, -6, -7, -8]
];

var vetor =[]

for (let i = 0; i < matriz.length; i++) {
    vetor[i] = 0
   for (let j = 0; j < matriz[i].length; j++) {
   
        if(matriz[i][j] < 0 ){
            vetor[i]++
        }
   }
}

for (let index = 0; index < vetor.length; index++) {
    console.log("Quantidade de negativos na linha " + (index+1) + ": " + vetor[index])
}

