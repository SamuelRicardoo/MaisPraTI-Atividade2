const entrada = require('prompt-sync')();

function isPar(numero){
    return numero % 2 ==0; 
}

var somaNumeros= 0;
var menorValor= Infinity // iniciar com um valor muito grande
var qtdValoresPares=0;
var divisorParaMedia =0;
var con = true;

while(con){

    var numero = parseInt(entrada("Digite um numero: "))
    
    somaNumeros+= numero;
    divisorParaMedia++;

    if(isPar(numero)){
        qtdValoresPares++;
    }

    if(menorValor > numero ){
        menorValor = numero;
    }

    var resposta = entrada("Deseja continuar S/N ").toUpperCase();
    if(resposta !== "S"){
        con = false;
    }
}

var media = somaNumeros / divisorParaMedia

console.log("Soma dos números:", somaNumeros);
console.log("Média dos números:", media);
console.log("Menor valor:", menorValor);
console.log("Quantidade de valores pares:", qtdValoresPares);