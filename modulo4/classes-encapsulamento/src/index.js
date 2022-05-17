"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:3003`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    getUser() {
        return [this.age, this.cpf, this.name, this.transactions];
    }
    getName() {
        return this.name;
    }
    addTransaction(transaction) {
        this.transactions.push(transaction);
    }
    setAge(newAge) {
        return this.age = newAge;
    }
}
let usuario = new UserAccount("111", "User1", 27);
usuario.setAge(28);
class Transaction {
    constructor(description, value, date) {
        this.description = description;
        this.value = value;
        this.date = date;
    }
    getTransaction() {
        return this.description, this.value, this.date;
    }
}
let add = new Transaction("pagamento", 227, "10/04/2022");
usuario.addTransaction(add);
class Bank {
    constructor(accounts) {
        this.accounts = accounts;
    }
    getNames() {
        return this.accounts.map((user) => {
            return user.getName();
        });
    }
}
console.log(usuario.getUser());
