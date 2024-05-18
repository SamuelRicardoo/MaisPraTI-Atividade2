function contagemAcerto(gabarito, respostaAluno){
    var acerto = 0

    for (let i = 0; i < respostaAluno.length; i++) {
        if(respostaAluno[i] === gabarito[i]){
            acerto++
        }
    }
    return acerto;
}

let gabarito = [true, false, true, false, true, false, true, false, true, false,
    true, false, true, false, true, false, true, false, true, false];

var respostaAluno = []

for (let i = 0; i < 50; i++) {
    var respostas = []
  for (let j = 0; j < gabarito.length; j++) {
    respostas.push(Math.random() < 0.75) 
  }
  respostaAluno.push(respostas);
}

console.log("RESULTADO")
for (let index = 0; index < respostaAluno.length; index++) {
   var nAcertos = contagemAcerto(gabarito,respostaAluno[index])
   if(nAcertos >= 12){
    console.log("Aluno "+ (index+1) + "- teve: "+nAcertos+": APROVADO")
   }else{
    console.log("Aluno "+ (index+1) + "- teve: "+nAcertos+": REPROVADO")
   }
}