// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(alturaRetangulo, larguraRetangulo) {
  // implemente sua lógica aqui
  alturaRetangulo = Number(prompt("Digite a altura do retângulo"));
  larguraRetangulo = Number(prompt("Digite a largura do retângulo"));

  const area = alturaRetangulo * larguraRetangulo;

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Digite o ano que estamos:"));
  anoNascimento = Number(prompt("Digite seu ano de nascimento: "));

  idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  peso = Number(prompt("Digite seu peso em Kg:"))
  altura = Number(prompt("Digite sua altura em metros:"))
  const calculoIMC = (peso / (altura * altura))

  return calculoIMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Digite seu nome:");
  idade = prompt("Digite sua idade:");
  email = prompt("Digite seu email:");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua cor favorita:");
  const cor2 = prompt("Digite sua segunda cor favorita:");
  const cor3 = prompt("Digite sua terceira cor favorita:");

  console.log([cor1, cor2, cor3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  string = prompt("Digite uma menssagem:");
  string = string.toUpperCase()
  return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  custo = Number(prompt("Qual o custo do espetáculo?"));
  valorIngresso = Number(prompt("Qual o valor do ingresso?"));

  semPrejuizo = custo / valorIngresso

  return semPrejuizo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt("escreva uma palavra:");
  string2 = prompt("escereva outra palavra");

  string1 = string1.length
  string2 = string2.length

  stringsIguais = string1 === string2

  return stringsIguais


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array,) {
  // implemente sua lógica aqui
arrayCopo = array[0]
array[0] = array[array.length - 1]
array[array.length - 1] = arrayCopo

return array

}




// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toUpperCase()
    string2 = string2.toUpperCase()

   return string1 === string2



  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}