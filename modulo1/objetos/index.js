// Exercicio de interpretação de código

// 1 a.
// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14h

// 2 a.
// nome: Juca
//	idade: 3
//	raca: SRD

// nome: juba
//	idade: 3
//	raca: SRD

// nome: jubo
//	idade: 3
//	raca: SRD

// b.  puxa tudo q está dentro do objeto.

// 3 a. false
//      undefined

// b. Pelo que entendi o console.log imprimiu em array a resposta de backender e quando foi procurar a altura, a achou

// Exercícios de escrita de código
// 1 a.

const pessoa = {
    nome: "Victor",
    apelidos: ["Vsux", "Tio Vsux", "Tio"]
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}`)
//b.


let pessoaContinuacao = [...pessoa.apelidos]
pessoaContinuacao.push("vitu", "vitinho", "jovem")

console.log(pessoaContinuacao);

// 2 a.

const exercicio2A = {
    nome: "ash ketchum",
    idade: 10,
    profissao: "Treinador de pokemons"
}

const exercicio2Ab = {
    ...exercicio2A,
    nome: "Misty",
    idade: 12

}

console.log(exercicio2A, exercicio2Ab)

function minhaFuncao(ash) {
    return [ash.nome, ash.nome.length,
    ash.idade, ash.profissao,
    ash.profissao.length]
}
minhaFuncao(exercicio2A)

console.log(minhaFuncao(exercicio2A))

function minhaFuncao2(Misty) {
    return [Misty.nome, Misty.nome.length,
    Misty.idade, Misty.profissao,
    Misty.profissao.length]
}
minhaFuncao2(exercicio2Ab)

console.log(minhaFuncao(exercicio2Ab))





//3
// passo 1.faz a const para cada fruta, passo 2faz a função pra retornar o nome das frutas,
// passo 3 adiciona as frutas no carrinho,passo 4 imprime o carrinho 

//passo 1
carrinho = []

const pera = {
    nome: "Pêra",
    disponibilidade: true
}
const uva ={
    nome: "Uva",
    disponibilidade: false
}
const laranja = {
    nome: "Laranja",
    disponibilidade: true
}

//passo 2
sacola = (feira) => {
    return [feira.nome]

}

// passo 3
sacola(carrinho.push(pera.nome,uva.nome,laranja.nome))

//passo 4
console.log("impressão da variavel carrinho", carrinho)




// desafio
// in progress
/*
function umafuncao() {
 nome = prompt("seu nome?") 
 idade = Number(prompt("idade?"))
 profissao = prompt("profissao")

 const

}
umafuncao() 
*/

