// Exercícios de interpretação de código
//1)
// a) 10
//    50

// b) daria erro    
// 2)
// a) essa função coloca todo o texto escrito no "textoDoUsuario" em letras minusculas e procurará a palavra "cenoura"
// b) i. true
//    ii. true
//    iii false

//1 a)

let nome = "Victor Simões"
let idade = "27"
let cidade = "João Pessoa"
let profissao = "estudante"

function minhaCaracteristica() {
    console.log(`Eu sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}

minhaCaracteristica()

//b)

function fraseB (nome , idade , cidade , profissao){
nome = "Victor"
idade = Number(27)
cidade = "João Pessoa"
profissao = "estudante"

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao} `)

};
fraseB("Victor" , Number (27)  , "João Pessoa" , "estudante")

//2 )a)

function somar(numero1 , numero2){

const soma = numero1 + numero2
return soma

}
const numeroDigitado1 = Number(prompt("digite um numero"))
const numeroDigitado2 = Number(prompt("digite outro numero"))


const somaDosDigitos = (numeroDigitado1 + numeroDigitado2)

console.log(`A soma dos numeros da função é ${somaDosDigitos}` )


//2) b)
// faz a função, determina as variaveis dela. depois faz a soma(q foi pedida), da o return. aplica as constantes do prompt em numero, sinca a variaval da funçao(linhas 57 com 67) e imprime a soma delas.
function somaBoolean(digito1, digito2) {

    soma = digito1 + digito2

    return soma
}

const digiteUmNumero = Number(prompt("digite um numero booleano"))
const digiteUmNumero2 = Number(prompt("digite outro numero booleano"))

somaBoolean(digiteUmNumero, digiteUmNumero2)

const somaDosDigitosBooleanos = digiteUmNumero + digiteUmNumero2

console.log(" o valor da soma booleana eh " + somaDosDigitosBooleanos)

// fazer função pra saber se o primeiro numero eh maior ou igual ao segundo. fiz uma const booleana dentro da função e retornei. sinquei a função linha 74 com a linha 81. imprimei o resultado da função dos numeros digitados em prompt com nome digiteUmNumero e digiteUmNumero2 
function maiorOuIgual(primeiroNumero, segundoNumero) {

    const maiorOuIgual = primeiroNumero >= segundoNumero
    return maiorOuIgual
}


maiorOuIgual(digiteUmNumero, digiteUmNumero2)

console.log("o primeiro numero eh maior ou igual ao segundo! V ou F " + (maiorOuIgual(digiteUmNumero, digiteUmNumero2)));



//2c,  função pra saber se o numero eh par

function numerParOuNao(numeroPar) {

    numeroPar = numeroPar % 2 === 0

    return (numeroPar)
}



const parOuNao = prompt("digite um numero pra saber se ele eh par",)

numerParOuNao(parOuNao)


console.log("o numero eh par?", (numerParOuNao(parOuNao)))

//2 d


function formatar(mensagem) {

    console.log(mensagem.toUpperCase());
    console.log(mensagem.length)
};


const mensagemPrompt = prompt("digite sua mensagem")

const imprimirMensagem = formatar(mensagemPrompt)

console.log("quantidade de letras na mensagem" , imprimirMensagem);




//3



function somar(numeroUsuario1, numeroUsuario2) {

  const somar = numeroUsuario1 + numeroUsuario2;

    return somar

}


function subtracao(numeroUsuario1, numeroUsuario2) {

    const subtracao = numeroUsuario1 - numeroUsuario2;
    return subtracao

}

function divisao(numeroUsuario1, numeroUsuario2) {
    const divisao = numeroUsuario1 / numeroUsuario2;
    return divisao

}
function multiplicacao(numeroUsuario1, numeroUsuario2) {

    const multiplicacao = numeroUsuario1 * numeroUsuario2;
    return multiplicacao

}

const numeroUsuario1 = Number(prompt("digite um numero para as operaçoes"));
const numeroUsuario2 = Number(prompt("digite outro numero para as operaçoes"));


console.log("Numeros inseridos", numeroUsuario1, "e", numeroUsuario2,);
console.log("soma: " , somar(numeroUsuario1, numeroUsuario2));
console.log("Diferença: ", subtracao(numeroUsuario1, numeroUsuario2));
console.log("Multiplicação: ", multiplicacao(numeroUsuario1, numeroUsuario2));
console.log("divisao: ", divisao(numeroUsuario1, numeroUsuario2));






