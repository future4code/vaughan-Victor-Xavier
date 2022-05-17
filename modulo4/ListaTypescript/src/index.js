"use strict";
function frase(nome, nascimento) {
    const resultado = nascimento.split("/", 3);
    return `Olá me chamo ${nome}, nasci no dia ${resultado[0]} do mês de ${resultado[1]} do ano de ${resultado[2]}`;
}
console.log(frase("Victor", "16/08/1994"));
function variaveis(tiposVariaveis) {
    if (typeof tiposVariaveis === "string") {
        return "Tipo String!";
    }
    else if (typeof tiposVariaveis === "number") {
        return "Tipo Number!";
    }
    else if (typeof tiposVariaveis === "boolean") {
        return " Tipo Boolean!";
    }
}
console.log(variaveis(true));
var GENERO;
(function (GENERO) {
    GENERO["TERROR"] = "Terror";
    GENERO["ACAO"] = "A\u00E7\u00E3o";
    GENERO["DRAMA"] = "Drama";
    GENERO["COMEDIA"] = "Com\u00E9dia";
    GENERO["ROMANCE"] = "Romance";
})(GENERO || (GENERO = {}));
const filme1 = {
    nome: "O Exorcista",
    ano: 1973,
    genero: GENERO.TERROR,
    pontuacao: 9.5
};
function filme() {
    return filme1;
}
console.log(filme());
const usuarios = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
];
function usuarioAdmin(admin) {
    const adminFilter = admin.filter((admin) => {
        return admin.role === "admin";
    });
    const adminMap = adminFilter.map((admin) => {
        return admin.email;
    });
    return adminMap;
}
console.log(usuarioAdmin(usuarios));
