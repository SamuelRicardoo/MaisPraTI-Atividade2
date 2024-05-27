function totalVendasPorVendedor(vendasArray) {
    let resumoVendas = {};
    
    for (let i = 0; i < vendasArray.length; i++) {
        let venda = vendasArray[i];
        let vendedor = venda.vendedor;
        let valor = venda.valor;
        
        if (resumoVendas[vendedor]) {
            resumoVendas[vendedor] += valor;
        } else {
            resumoVendas[vendedor] = valor;
        }
    }
    
    return resumoVendas;
}

let vendas = [
    { vendedor: "Carlos", valor: 100 },
    { vendedor: "Ana", valor: 150 },
    { vendedor: "Carlos", valor: 200 },
    { vendedor: "Ana", valor: 50 },
    { vendedor: "Pedro", valor: 300 }
];

let resultado = totalVendasPorVendedor(vendas);
console.log(resultado); 