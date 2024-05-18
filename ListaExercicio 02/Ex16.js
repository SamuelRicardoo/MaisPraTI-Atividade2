var vetor = [];

var vetor = [];

for (let i = 0; i < 20; i++) {
   vetor[i] = Math.floor(Math.random() * 100);
}

console.log("Vetor preenchido com valores aleatórios:");
for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
}

vetor.sort((a, b) => b - a);
console.log("Vetor em ordem crescente:");
for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
}
