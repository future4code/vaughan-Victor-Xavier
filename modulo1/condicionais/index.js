// 1.a. o codigo pede para o usuario digitar um numero, se o numero tiver resto zero ele passou no teste, caso contrário, ele n passou.
// b. numeros pares 
// c. numeros impares
//2.a. para saber o preço das frutas especificas
// b. O preço da fruta maçã é, R$ 2.25
// c. O preço da fruta  Pêra  é  R$  5
// 3.a. pedindo para o usuario digitar um numero
// b. para o numero 10 seria "Esse número passou no teste" e para -10 da erro pois n tem menssagem
// c.   da erro pois n tem menssagem para numero maior q 0

// Exercícios de escrita de código
// 1

let idadeUsuario = Number(prompt("Qual sua idade?"))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
}
else {
    console.log("Você não pode dirigir")
}

// 2

const turnoAluno = prompt("Em qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

if (turnoAluno === "M") {
    console.log("Bom Dia!")
}
else if (turnoAluno === "V") {
    console.log("Boa Tarde!")
}
else if (turnoAluno === "N") {
    console.log("Boa Noite!")
}

switch (turnoAluno) {
    case "V":
        console.log("Boa Tarde!")
        break
    case "M":
        console.log("Bom Dia!")
        break
    case "N":
        console.log("Boa Noite!")

}

// 4 e dasafio1


filmeGenero = prompt("Qual gênero de filme você irá assistir?")
filmeIngresso = Number(prompt("Qual o preço do ingresso?"))


if (filmeGenero === "fantasia" && (filmeIngresso <= 15)) {
    lanchinho = prompt("qual o lanchinho que irá comprar?")
    {
        console.log(`Bom Filme! Aproveite seu ${lanchinho}`)

    }


}
else {
    console.log("Escolha outro filme :(")
}





function compraDoIngressoParaAssistirJogo(nomeCompleto, tipoDeJogo, etapaDoJogo, categoria, QuantidadeDeIngressos) {

    nomeCompleto = prompt("Digite seu nome completo:")
    tipoDeJogo = prompt("digiete: IN indica internacional; e DO indica doméstico;")
    etapaDoJogo = prompt("Digite: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
    categoria = prompt("opções 1, 2, 3 ou 4;")
    QuantidadeDeIngressos = Number(prompt("Quantos ingressos?"))

  


}

compraDoIngressoParaAssistirJogo()