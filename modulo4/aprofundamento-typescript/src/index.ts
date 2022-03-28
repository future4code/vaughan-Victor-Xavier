

//1.a da erro, nao pode ser atribuido 
let minhaString: String

//b
let meuNumero: number | string

enum CorFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}


type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita
}
//1

//2
type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {}
}


function obterEstatisticas(numeros: number[]): any {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }
    type Estatisticas = {
        maior: number,
        menor: number,
        media: number
    }
    const valores: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return valores
}

//3

type Posts = {
    autor: string,
    texto: string
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
]

function buscarPostsPorAutor(posts:Posts[] , autorInformado: string):Posts[] {
    return posts.filter(
        (post:Posts ) => {
            return post.autor === autorInformado
        }
    )
}

console.log(buscarPostsPorAutor(posts,"Dobby"))

//4
//sim,   "scripts": {
//     "start": "tsc && node ./build/index.js &&  ./build/exercicio-4.js "
// },
