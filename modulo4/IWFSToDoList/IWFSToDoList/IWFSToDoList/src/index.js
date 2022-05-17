"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./connection"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
const createUser = (name, nickname, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.insert({
        id: Date.now().toString(),
        name: name,
        nickname: nickname,
        email: email
    })
        .into("User");
});
app.post("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 400;
    try {
        const create = yield createUser(req.body.name, req.body.nickname, req.body.email);
        res.status(200).send({ message: "criado com sucesso", create });
    }
    catch (error) {
        res.status(500).send(error.sqlMessage || error.message);
    }
}));
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.default.raw(`
      SELECT id, nickname FROM User WHERE id = '${id}'
    `);
    return result[0][0];
});
app.get("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    let errorCode = 400;
    try {
        const result = yield getUserById(id);
        if (!result) {
            errorCode = 422;
            throw new Error("Id não encontrado");
        }
        res.send({ result: result });
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}));
app.put("/user/edit/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { name, nickname } = req.body;
    let errorCode = 400;
    try {
        yield (0, connection_1.default)("User")
            .update({
            name,
            nickname
        })
            .where("id", id);
        if (!name || !nickname) {
            errorCode = 422;
            throw new Error("Preencha todos os campos");
        }
        res.send({ message: "Usuário editado com sucesso" });
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}));
const createTask = (title, description, limit_date, creator_user_id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.default)("TodoListTask")
        .insert({
        id: Date.now().toString(),
        title: title,
        description: description,
        limit_date: limit_date,
        creator_user_id: creator_user_id
    });
});
app.post("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 422;
    try {
        if (!req.body.title || !req.body.description || !req.body.limit_date || !req.body.creator_user_id) {
            errorCode = 422;
            throw new Error("Campo vazio ou inválido!");
        }
        const createT = yield createTask(req.body.title, req.body.description, req.body.limit_date, req.body.creator_user_id);
        res.status(200).send({
            message: "Criado com sucesso!", createT
        });
    }
    catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}));
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultado = yield (0, connection_1.default)("User")
            .select("id", "nickname");
        res.status(200).send({ users: resultado });
    }
    catch (error) {
        res.status(500).send(error.sqlMessage || error.message);
    }
}));
