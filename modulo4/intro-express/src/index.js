"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
;
app.get("/", (req, res) => {
    res.send("Hello from Express");
});
const usuario1 = {
    id: 1,
    name: "victor",
    phone: "83 99999-9999 ",
    email: "victor@gmail.com",
    website: "victor.com.br"
};
const usuario2 = {
    id: 1,
    name: "Leleco",
    phone: "83 88888-8888 ",
    email: "leleco@gmail.com",
    website: "leleco.com.br"
};
const usuario3 = {
    id: 1,
    name: "Sara",
    phone: "83 77777-777 ",
    email: "sara@gmail.com",
    website: "saraondeequevoceseesconde.com.br"
};
const arrayDeUsuarios = [
    usuario1, usuario3, usuario2
];
app.get("/users", (req, res) => {
    const user = arrayDeUsuarios;
    res.status(200).send(user);
});
const postPoema1 = {
    id: 1,
    title: "Albert Einstein",
    body: "Pode ser que um dia não mais existamos.Mas, se ainda sobrar amizade,nasceremos de novo um para o outro.",
    userId: "AlbertEinstein"
};
const postPoema2 = {
    id: 2,
    title: "Chico Buarque",
    body: "Hoje na solidão ainda custoA entender como o amor foi tão injustoPra quem só lhe foi dedicação",
    userId: "ChicoBuarque"
};
const postPoema3 = {
    id: 3,
    title: "Charles Chaplin",
    body: "Não preciso me drogar para ser um gênio;Não preciso ser um gênio para ser humano;Mas preciso do seu sorriso para ser feliz.",
    userId: "CharlesChaplin"
};
const arrayPostPoema = [
    postPoema1, postPoema2, postPoema3
];
app.get("/posts", (req, res) => {
    const postAtual = arrayPostPoema;
    res.status(200).send(postAtual);
});
app.get("/posts/:id", (req, res) => {
    const idUsuario = Number(req.params.id);
    const postUsuario = arrayPostPoema.filter(post => {
        if (post.id === idUsuario) {
            return post;
        }
    });
    res.status(200).send(postUsuario);
});
