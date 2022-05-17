"use strict";
let minhaString;
let meuNumero;
var CorFavorita;
(function (CorFavorita) {
    CorFavorita["VERMELHO"] = "Vermelho";
    CorFavorita["LARANJA"] = "Laranja";
    CorFavorita["AMARELO"] = "Amarelo";
    CorFavorita["VERDE"] = "Verde";
    CorFavorita["AZUL"] = "Azul";
    CorFavorita["ANIL"] = "Anil";
    CorFavorita["VIOLETA"] = "Violeta";
})(CorFavorita || (CorFavorita = {}));
function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const valores = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return valores;
}
const posts = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
];
function buscarPostsPorAutor(posts, autorInformado) {
    return posts.filter((post) => {
        return post.autor === autorInformado;
    });
}
console.log(buscarPostsPorAutor(posts, "Dobby"));
