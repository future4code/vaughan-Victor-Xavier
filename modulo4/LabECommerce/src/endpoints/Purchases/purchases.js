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
exports.getPurchases = void 0;
const connection_1 = require("../../../src/data/connection");
function getPurchases(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let errorCode = 422;
        try {
            const id = req.params;
            if (!id) {
                throw new Error(`Não foi possivel achar o is '${id}'`);
            }
            const listProducts = yield (0, connection_1.connection)("labecommerce_purchases")
                .select("*")
                .where("labecommerce_purchases.id", `${id}`);
            res.status(200).send({ Compras: listProducts });
        }
        catch (error) {
            res.status(500).send("Internal server error");
        }
    });
}
exports.getPurchases = getPurchases;
