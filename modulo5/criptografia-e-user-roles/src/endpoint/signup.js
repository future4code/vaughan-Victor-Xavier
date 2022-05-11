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
exports.signUp = void 0;
const conection_1 = __importDefault(require("../conection"));
const idGenerator_1 = require("../services/idGenerator");
const token_1 = require("../services/token");
const generateHash_1 = require("../services/generateHash");
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("chegou");
        const { email, password, role } = req.body;
        try {
            if (!email || email.indexOf("@") === -1) {
                throw new Error("formato de email invalido");
            }
            if (!password || password.length < 6) {
                throw new Error("senha muito curta");
            }
            if (!role) {
                throw new Error("Preencha o campo 'role' ");
            }
            const id = (0, idGenerator_1.genereteId)();
            let hashManager = new generateHash_1.HashManager();
            const cypherPassword = hashManager.createHash(password);
            const userData = {
                id,
                email,
                password: cypherPassword,
                role
            };
            yield (0, conection_1.default)('userAulaAltenticacao')
                .insert(userData);
            const authenticator = new token_1.Authenticator();
            const payload = {
                id: userData.id,
                role
            };
            const token = authenticator.generateToken(payload);
            res.status(201).send("usuario criado com sucesso. " + token);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    });
}
exports.signUp = signUp;
