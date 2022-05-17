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
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓");
});
const listaDeAfazeres = [
    {
        "userId": 1,
        "id": 1,
        "title": "estudar",
        "completed": true
    },
    {
        "userId": 2,
        "id": 2,
        "title": "caminhar",
        "completed": true
    },
    {
        "userId": 3,
        "id": 3,
        "title": "sofrer",
        "completed": true
    },
    {
        "userId": 4,
        "id": 4,
        "title": "limpar a casa",
        "completed": false
    },
];
app.get("/afazeres/:completed", (req, res) => {
    if (req.params.completed === "true" || req.params.completed === "false") {
        let completo;
        if (req.params.completed === "true") {
            completo = true;
        }
        else if (req.params.completed === "false") {
            completo = false;
        }
        const afazeresCompletos = listaDeAfazeres;
        const afazeresLista = afazeresCompletos.filter((a) => {
            return a.completed === completo;
        });
        res.status(200).send(afazeresLista);
    }
});
app.post("/criar-tarefa/:idUsuario", (req, res) => {
    const nomeDaTarefa = req.body.title;
    const completo = req.body.completed;
    const idUsuario = Number(req.headers.authorization);
    listaDeAfazeres.push({
        userId: idUsuario,
        id: Number(Date.now()),
        title: nomeDaTarefa,
        completed: completo,
    });
    res.status(200).send({ listaDeAfazeres });
});
