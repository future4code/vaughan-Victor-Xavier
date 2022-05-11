"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owl = void 0;
class Owl {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    chirp() {
        console.log("Hu Hu 🦉");
    }
    fly(quantity) {
        console.log("the owl has flown for " + quantity + " minutes");
    }
    eat(quantity) {
        console.log(`the owl has eaten ` + quantity);
    }
}
exports.Owl = Owl;
