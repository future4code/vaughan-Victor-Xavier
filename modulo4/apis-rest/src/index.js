"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
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
app.get("/users", (req, res) => {
    try {
        res.status(200).send({ users: data_1.users });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
app.get("/users/type", (req, res) => {
    try {
        const { type } = req.body;
        if (type !== type.toLowerCase() && !type) {
            throw new Error("Informe um 'type' válido");
        }
        else {
            const user = data_1.users.filter((user) => {
                return user.type.toLowerCase() === type.toLowerCase();
            });
            res.status(200).send(user);
        }
    }
    catch (error) {
        switch (error.message) {
            case "Por gentileza, informar um type válido":
                res.status(401);
                break;
            default:
                res.status(500);
        }
        res.send(error.message);
    }
});
