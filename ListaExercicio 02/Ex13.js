function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

var vetor = [];

for (let i = 1; i < 15; i++) {
    vetor.push((fibonacci(i)));
}

console.log("Os 10 primeiros elementos da Sequência de Fibonacci são:");
for (let i= 0; i <vetor.length; i++) {
    console.log(vetor[i])
}
