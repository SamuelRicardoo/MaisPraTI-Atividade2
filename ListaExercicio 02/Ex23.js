// Definindo o tamanho da matriz
let linhas = 7;
let colunas = 7;

// Criando a matriz vazia
let matriz = [];

// Preenchendo a matriz com zeros
for (let i = 0; i < linhas; i++) {
  matriz[i] = [];
  for (let j = 0; j < colunas; j++) {
    matriz[i][j] = 0;
  }
}

// Preenchendo a diagonal principal com uns
for (let i = 0; i < linhas; i++) {
  matriz[i][i] = 1;
}

// Imprimindo a matriz
for (let i = 0; i < linhas; i++) {
  console.log(matriz[i].join(" "));
}
