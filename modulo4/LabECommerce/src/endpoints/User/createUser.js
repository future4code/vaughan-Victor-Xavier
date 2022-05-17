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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const connection_1 = require("../../data/connection");
const create = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.connection
        .insert({
        id: Date.now().toString(),
        name: name,
        email: email,
        password: password
    })
        .into("labecommerce_users");
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 400;
    try {
        const { name, email, password } = req.body;
        const user = yield create(name, email, password);
        res.status(201).send(`Usuario ${user} cadastrado com sucesso.`);
    }
    catch (error) {
        res.status(500).send("erro interno do servidor");
    }
});
exports.createUser = createUser;
