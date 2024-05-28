function contarOcorrencias(stringsArray) {
    let contagem = {};

    for (let i = 0; i < stringsArray.length; i++) {
        let str = stringsArray[i];
        if (contagem[str]) {
            contagem[str]++;
        } else {
            contagem[str] = 1;
        }
    }
    
    return contagem;
}


let array = ["apple", "banana", "apple", "orange", "banana", "apple"];

let resultado = contarOcorrencias(array);