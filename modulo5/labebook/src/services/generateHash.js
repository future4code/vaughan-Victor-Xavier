"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashManager = void 0;
const bcryptjs_1 = require("bcryptjs");
class HashManager {
    constructor() {
        this.createHash = (plainText) => {
            const cost = 12;
            const salt = (0, bcryptjs_1.genSaltSync)(cost);
            const cypherText = (0, bcryptjs_1.hashSync)(plainText, salt);
            return cypherText;
        };
        this.compareHash = (plainText, cypherText) => {
            return (0, bcryptjs_1.compareSync)(plainText, cypherText);
        };
    }
}
exports.HashManager = HashManager;
