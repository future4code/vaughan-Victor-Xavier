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
    let maiorNumero
    let maiorDivisivelPorMenor = false
    if (num1 > num2) {
        maiorNumero = num1

        resto = num1 % num2
        if (resto === 0) {
            maiorDivisivelPorMenor = true

        }
        diferenca = num1 - num2
    }
    else {
        maiorNumero = num2
        resto = num2 % num1
        if (resto === 0) {
            maiorDivisivelPorMenor = true
        }
        diferenca = num2 - num1
    }

    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let nNumenosPares = []
    for (let i = 0; nNumenosPares.length < n; i++) {
        if (i % 2 === 0) {
            nNumenosPares.push(i)
        }
    }
    return nNumenosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo = ""
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA)

        if (ladoA === ladoB && ladoB === ladoC) {
            triangulo = "Equilátero"
        }

        else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            triangulo = "Isósceles"
        }

        else if (ladoA !== ladoB || ladoB !== ladoC || ladoA !== ladoC)
            triangulo = "Escaleno"

    return triangulo

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