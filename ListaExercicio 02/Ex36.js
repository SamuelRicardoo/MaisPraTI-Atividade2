function verificarApostas(gabarito, apostas) {
    for (let i = 0; i < apostas.length; i++) {
        let numeroApostador = apostas[i][0];
        let respostas = apostas[i].slice(1);
        let acertos = 0;

        for (let j = 0; j < gabarito.length; j++) {
            if (gabarito[j] === respostas[j]) {
                acertos++;
            }
        }

        console.log("Apostador:", numeroApostador, "- Acertos:", acertos);
        if (acertos === 13) {
            console.log("Parabéns, você foi o GANHADOR!");
        }
    }
}


let gabarito = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];


let apostas = [];

for (let i = 1; i <= 100; i++) {
    let respostaApostador = [i]; 

    for (let j = 1; j <= 13; j++) {
        respostaApostador.push(Math.floor(Math.random() * 2) + 1); 
    }

    apostas.push(respostaApostador);
}


verificarApostas(gabarito, apostas);
