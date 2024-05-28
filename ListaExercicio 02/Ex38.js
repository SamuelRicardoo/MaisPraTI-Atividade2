function processarVetor(vetor, operacao) {
    let resultado;
    
    switch (operacao) {
        case 1:
            // Soma dos elementos
            resultado = vetor.reduce((soma, valor) => soma + valor, 0);
            console.log("Soma dos elementos:", resultado);
            break;
        case 2:
            // Produto dos elementos
            resultado = vetor.reduce((produto, valor) => produto * valor, 1);
            console.log("Produto dos elementos:", resultado);
            break;
        case 3:
            // Média dos elementos
            resultado = vetor.reduce((soma, valor) => soma + valor, 0) / vetor.length;
            console.log("Média dos elementos:", resultado);
            break;
        case 4:
            // Ordenar os elementos em ordem crescente
            resultado = [...vetor].sort((a, b) => a - b);
            console.log("Elementos ordenados:", resultado);
            break;
        case 5:
            // Mostrar o vetor
            console.log("Vetor:", vetor);
            break;
        default:
            console.log("Operação inválida");
    }
}

let vetor = [5, 3, 8, 1, 4, 7];

let operacao = 1; 

processarVetor(vetor, operacao);
