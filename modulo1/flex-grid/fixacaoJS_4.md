function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
if(arrayDeNumeros.includes(numeroEscolhido)){
  let count = 0
  for(let array of arrayDeNumeros){
    if(array===numeroEscolhido){
      count++
  }
  }
}
return`O número ${numeroEscolhido} aparece ${count} x`

}