// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length

}
retornaTamanhoArray()

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}
retornaArrayInvertido()

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (a, b) { return a - b });
    //DESAFIO  return function compararNumeros(a, b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
}
retornaArrayOrdenado()

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter(item => (item % 2) === 0)

}
retornaNumerosPares()
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    par = array.filter(item => (item % 2) === 0)
    return par.map(item => Math.pow(item, 2))


}
retornaNumerosParesElevadosADois()


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    biggerValue = -Infinity
    for (numero of array) {
        if (numero > biggerValue) {
            biggerValue = numero
        }
       
    }
    return biggerValue



}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}