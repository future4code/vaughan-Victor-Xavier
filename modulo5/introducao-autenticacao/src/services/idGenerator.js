"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genereteId = void 0;
const uuid_1 = require("uuid");
function genereteId() {
    return (0, uuid_1.v4)();
}
exports.genereteId = genereteId;
