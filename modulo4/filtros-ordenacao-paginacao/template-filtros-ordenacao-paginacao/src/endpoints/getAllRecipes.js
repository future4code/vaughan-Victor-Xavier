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
exports.allEndpoints = exports.listUsers = exports.ordenacaoUsers = exports.getTypeUsers = exports.getAllUsers = void 0;
const connection_1 = require("../data/connection");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        if (!name) {
            throw new Error(`Não foi possivel achar o titulo '${name}'`);
        }
        const filtraNome = yield (0, connection_1.connection)("aula48_exercicio")
            .select("*")
            .where("name", "like", `%${name}%`);
        res.status(200).send(filtraNome);
    }
    catch (error) {
        res.send(error.message || error.sqlMessage);
    }
});
exports.getAllUsers = getAllUsers;
const getTypeUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type } = req.params;
        if (!type) {
            throw new Error(`Não foi possivel achar o tipo '${type}'`);
        }
        const filtraType = yield (0, connection_1.connection)("aula48_exercicio")
            .select("*")
            .where("type", "like", `%${type}%`);
        res.status(200).send(filtraType);
    }
    catch (error) {
        res.send(error.message || error.sqlMessage);
    }
});
exports.getTypeUsers = getTypeUsers;
const ordenacaoUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        let ordernar = req.query.ordenacao;
        if (ordernar.toUpperCase() !== 'ASC' && ordernar.toUpperCase() !== 'DESC') {
            ordernar = 'ASC';
        }
        if (!ordernar) {
            const result = yield (0, connection_1.connection)("aula48_exercicio")
                .select("*")
                .orderBy('email', `${ordernar}`);
        }
        const result = yield (0, connection_1.connection)("aula48_exercicio")
            .select("*")
            .orderBy('name', `${ordernar}`)
            .orderBy('type', `${ordernar}`);
        res.status(200).send(result);
    }
    catch (error) {
        res.send(error.message || error.sqlMessage);
    }
});
exports.ordenacaoUsers = ordenacaoUsers;
const listUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let quantidadeExibida = 5;
        let pagina = Number(req.query.pagina);
        let offset = quantidadeExibida * (pagina - 1);
        const result = yield (0, connection_1.connection)("aula48_exercicio")
            .select("*")
            .limit(quantidadeExibida)
            .offset(offset);
        res.status(200).send(result);
    }
    catch (error) {
        res.send(error.message || error.sqlMessage);
    }
});
exports.listUsers = listUsers;
const allEndpoints = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, type } = req.query;
        let ordernar = req.query.ordenacao;
        let pagina = Number(req.query.pagina);
        if (!pagina) {
            pagina = 1;
        }
        let quantidadeExibida = 5;
        let offset = quantidadeExibida * (pagina - 1);
        if (ordernar.toUpperCase() !== 'ASC' && ordernar.toUpperCase() !== 'DESC') {
            ordernar = 'DESC';
        }
        const result = yield (0, connection_1.connection)("aula48_exercicio")
            .select("*")
            .where("name", "like", `%${name}%`)
            .where("type", "like", `%${type}%`)
            .orderBy('name', `${ordernar}`)
            .limit(quantidadeExibida)
            .offset(offset);
        res.status(200).send(result);
    }
    catch (error) {
        res.send(error.message || error.sqlMessage);
    }
});
exports.allEndpoints = allEndpoints;
