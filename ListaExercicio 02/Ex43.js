let obj1 = {
    nome: "samuel",
    idade: 22,
    cidade: "Recife"
};

let obj2 = {
    idade: 30,
    email: "samuel@gmail.com",
    cidade: "Rio de Janeiro"
};


function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let objetoCombinado = combinarObjetos(obj1, obj2);

console.log(objetoCombinado);