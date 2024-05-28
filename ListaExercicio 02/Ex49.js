function agruparTransacoesPorCategoria(transacoes) {
    const categorias = {};
  
    transacoes.forEach(({ id, valor, data, categoria }) => {
      categorias[categoria] = categorias[categoria] || { transacoes: [], subtotal: 0 };
      categorias[categoria].transacoes.push({ id, valor, data });
      categorias[categoria].subtotal += valor;
    });
  
    return categorias;
  }
  
  const transacoes = [
    { id: 1, valor: 100, data: '2024-05-01', categoria: 'Alimentação' },
    { id: 2, valor: 50, data: '2024-05-02', categoria: 'Transporte' },
    { id: 3, valor: 200, data: '2024-05-03', categoria: 'Alimentação' },
    { id: 4, valor: 80, data: '2024-05-04', categoria: 'Lazer' },
    { id: 5, valor: 150, data: '2024-05-05', categoria: 'Alimentação' }
  ];
  
  const transacoesPorCategoria = agruparTransacoesPorCategoria(transacoes);
  console.log(transacoesPorCategoria);