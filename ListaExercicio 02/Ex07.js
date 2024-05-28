function valorTotal(tipoCarro,kmPercorrido, diasAlugados){

    var  valorTotal;

    if(tipoCarro == "POPULAR"){
        if(kmPercorrido > 100){

            valorTotal = (kmPercorrido * 0.10)
        }else{
            
            valorTotal = (kmPercorrido * 0.20)
        }
        var total = valorTotal + (diasAlugados * 90)

        return "O valor total a pagar: "+total

    }else if(tipoCarro == "LUXO"){

        if(kmPercorrido > 200){

            valorTotal = (kmPercorrido * 0.25)

        }else{
            
            valorTotal = (kmPercorrido * 0.30)
        }
        var total = valorTotal + (diasAlugados * 150)

        return "O valor total a pagar: "+total
    }
}

var tipoCarro = "LUXO";
var kmPercorrido = 250;
var diasAlugados = 5;

console.log(valorTotal(tipoCarro, kmPercorrido, diasAlugados))