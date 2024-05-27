function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    const inventarioCombinado = {};
  
    for (let item in inventarioLojaA) {
      inventarioCombinado[item] = inventarioLojaA[item];
    }
  
    for (let item in inventarioLojaB) {
      if (inventarioCombinado[item]) {
        inventarioCombinado[item] += inventarioLojaB[item];
      } else {
        inventarioCombinado[item] = inventarioLojaB[item];
      }
    }
  
    return inventarioCombinado;
  }
  
  const inventarioLojaA = {
    "maças": 10,
    "bananas": 5,
    "laranjas": 15
  };
  
  const inventarioLojaB = {
    "maças": 5,
    "peras": 10,
    "laranjas": 8
  };
  
  const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
  console.log(inventarioCombinado);