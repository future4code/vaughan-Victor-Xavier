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
exports.getInformationUser = void 0;
const types_1 = require("./../types/types");
const conection_1 = __importDefault(require("../conection"));
const getData_1 = require("../services/getData");
const getInformationUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 400;
    const token = req.headers.authorization;
    try {
        const verifyToken = (0, getData_1.getData)(token);
        if (verifyToken.role === types_1.USER_ROLES.NORMAL) {
            errorCode = 403;
            throw new Error("Usuário sem permissão, somente usuário com role = NORMAL, podem ter acesso a esse edpoint");
        }
        const [user] = yield (0, conection_1.default)('User')
            .select()
            .where({ id: verifyToken.id });
        res.status(200).send({ id: user.id, email: user.email, role: user.role });
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage });
    }
});
exports.getInformationUser = getInformationUser;
