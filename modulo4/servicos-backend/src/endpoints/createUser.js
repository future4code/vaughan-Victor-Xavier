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
const getAdressInfo_1 = require("./../services/getAdressInfo");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { zipcode, number, complement } = req.body;
        const address = yield (0, getAdressInfo_1.getAdressInfo)(zipcode);
        if (!address) {
            throw new Error("erro no get addres");
        }
        res.send({
            Estado: address.state,
            Bairro: address.district, Cidade: address.city, Logradouro: address.street,
            zipcode, number, complement
        });
    }
    catch (error) {
        res.send({ message: "CEP inesistente" });
    }
});
exports.createUser = createUser;
