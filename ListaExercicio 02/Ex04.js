function isTriangulo(a,b,c){

    if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {

        return "Esses valores pode forma um triangulo"

    }else{

        return "Não pode forma um triangulo"
    }
}

console.log(isTriangulo(3, 4, 5)); // Deve retornar "Esses valores podem formar um triângulo"

console.log(isTriangulo(1, 1, 3)); // Deve retornar "Esses valores não podem formar um triângulo"

console.log(isTriangulo(7, 8, 9)); // Deve retornar "Esses valores podem formar um triângulo"

console.log(isTriangulo(5, 12, 13)); // Deve retornar "Esses valores podem formar um triângulo"