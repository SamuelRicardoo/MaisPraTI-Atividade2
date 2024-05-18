function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log("Os 10 primeiros elementos da Sequência de Fibonacci são:");
for (let i = 1; i <= 10; i++) {
    console.log(fibonacci(i));
}
