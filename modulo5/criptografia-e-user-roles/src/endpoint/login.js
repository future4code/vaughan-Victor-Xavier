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
const getUserByEmail_1 = require("../../getUserByEmail");
const generateHash_1 = require("../services/generateHash");
const token_1 = require("../services/token");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const userData = {
                email,
                password,
            };
            if (!email || email.indexOf("@") === -1) {
                res.statusCode = 401;
                throw new Error("formato de email invalido");
            }
            const user = yield (0, getUserByEmail_1.getUserByEmail)(userData.email);
            if (!user) {
                res.statusCode = 401;
                throw new Error("Usuário inexistente");
            }
            let hashManager = new generateHash_1.HashManager();
            const passwordIsCorrect = hashManager.compareHash(password, user.password);
            if (!passwordIsCorrect) {
                res.statusCode = 401;
                throw new Error("Senha incorreta");
            }
            const authenticator = new token_1.Authenticator();
            const payload = {
                id: user.id,
                role: user.role
            };
            const token = authenticator.generateToken(payload);
            res.status(200).send(token);
        }
        catch (error) {
            if (res.statusCode === 200) {
                console.log(error);
                res.status(500).send({ message: "Internal server error" });
            }
            else {
                res.send({ message: error.message });
            }
        }
    });
}
exports.default = login;
