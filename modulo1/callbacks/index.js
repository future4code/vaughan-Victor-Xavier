//Exercícios de interpretação de código
/* 1.
    nome: Amanda Rangel
    apelido: Mandi

    nome: Laís Petra
    apelido: Laura

    nome: Letícia chijo
    apelido Chijo

 */

//2. [Amanda Rangel , Laís Petra , Letícia chijo]

//3. nome: Amanda Rangel
/*     apelido: Mandi

    nome: Laís Petra
    apelido: Laura
 */

// Exercícios de escrita de código

//1
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const nomePets = pets.map((item) => {
    return item.nome

})



const racaSalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
})


//Crie um novo array que contenha apenas o nome dos doguinhos
const arrayPets = [nomePets]
console.log(arrayPets)

//Crie um novo array apenas com os cachorros salsicha
const arraySalsicha = [racaSalsicha]
console.log(arraySalsicha)


//Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


const cupomPoodle = pets.filter((item) => {
    cupom = item.raca === "poodle"
    if (item.nome === "Madame") {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a Madame!`)
    }
    if (item.nome === "Fluffy") {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!`)
    }


    return cupom
})

//Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


//Crie um novo array que contenha apenas o nome de cada item

const nomeDosProdutos = produtos.map((produto) => {
    return produto.nome

})

console.log(nomeDosProdutos)

//Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const precoComDesconto = produtos.map((nomeProduto,) => {
    precoEmNumero = ((nomeProduto.preco) - nomeProduto.preco * 0.05).toFixed(2)


    return ([nomeProduto.nome, precoEmNumero]);
})
console.log(precoComDesconto)
//      Crie um novo array que contenha apenas os objetos da categoria Bebidas

const categoriaBebidas = produtos.map((categoriaBebidas) => {
    return categoriaBebidas.categoria === "Bebidas"

}
)


//Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const arrayYpe = produtos.filter((ype) => {
    return ype.nome.includes("Ypê")
})

console.log(arrayYpe)

//Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"


const produtoYpe = produtos.filter((produto) =>{
return produto.nome.includes(("Ypê"))

})

const mensagem = produtoYpe.map((produto) =>  `Compre ${produto.nome} por ${produto.preco}.`  )

console.log(mensagem)


