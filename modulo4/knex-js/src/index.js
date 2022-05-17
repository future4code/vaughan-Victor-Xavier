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
const connection_1 = __importDefault(require("./connection"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server ta on, pai  http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
;
const searchActor = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const resultado = yield connection_1.default
        .raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `);
    return resultado[0];
});
const countActors = (gender) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.default
        .raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
});
const attSalaryActor = (id, salary) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.default)("Actor")
        .update({
        salary: salary,
    })
        .where("id", id);
});
const deleteActor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.default)("Actor")
        .delete()
        .where("id", id);
});
const averageSalary = (gender) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, connection_1.default)("Actor")
        .avg("salary as average")
        .where({ gender });
    return result[0][0].average;
});
app.get("/actor", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const count = yield countActors(req.query.gender);
        res.status(200).send({
            gender: count,
        });
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}));
app.put("/actor", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield attSalaryActor(req.body.salary, req.body.id);
        res.status(200).send({ message: "Alterado com sucesso" });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
}));
app.delete("/actor/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield deleteActor(req.params.id);
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
}));
