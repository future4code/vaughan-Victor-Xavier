//1
function frase(nome: string, nascimento: string): string {



    const resultado: string[] = nascimento.split("/", 3)

    return `Olá me chamo ${nome}, nasci no dia ${resultado[0]} do mês de ${resultado[1]} do ano de ${resultado[2]}`
}

console.log(frase("Victor", "16/08/1994"))

//2
function variaveis(tiposVariaveis: string | number | boolean) {

    if (typeof tiposVariaveis === "string") {
        return "Tipo String!"
    } else if (typeof tiposVariaveis === "number") {
        return "Tipo Number!"
    } else if (typeof tiposVariaveis === "boolean") {
        return " Tipo Boolean!"
    }
}
console.log(variaveis(true))

//3

enum GENERO {
    TERROR = "Terror",
    ACAO = "Ação",
    DRAMA = "Drama",
    COMEDIA = "Comédia",
    ROMANCE = "Romance",

}

type Filmes = {
    nome: string,
    ano: number,
    genero: GENERO
    pontuacao?: number
}

const filme1: Filmes = {
    nome: "O Exorcista",
    ano: 1973,
    genero: GENERO.TERROR,
    pontuacao: 9.5
}

function filme() {
    return filme1
}

console.log(filme())


//5


const usuarios: usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

type usuario = {
  name: string,
  email: string,
  role: string

}

function usuarioAdmin (admin: usuario[]):string[] {
  const adminFilter = admin.filter((admin) => {
    return admin.role === "admin"
  })

  const adminMap = adminFilter.map((admin) => {
    return admin.email
  })

  return adminMap

}   

console.log(usuarioAdmin(usuarios))


