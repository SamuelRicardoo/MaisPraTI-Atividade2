function separarParesEImpares(valores) {
    let pares = [];
    let impares = [];

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 === 0) {
            pares.push(valores[i]);
            if (pares.length === 5) {
                console.log("Vetor de pares:", pares);
                pares = [];
            }
        } else {
            impares.push(valores[i]);
            if (impares.length === 5) {
                console.log("Vetor de ímpares:", impares);
                impares = [];
            }
        }
    }

    if (pares.length > 0) {
        console.log("Vetor de pares restante:", pares);
    }
    if (impares.length > 0) {
        console.log("Vetor de ímpares restante:", impares);
    }
}

let valores = [];
for (let i = 1; i <= 30; i++) {
    valores.push(i);
}

separarParesEImpares(valores);