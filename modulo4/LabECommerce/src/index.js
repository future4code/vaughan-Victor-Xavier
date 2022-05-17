"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const createUser_1 = require("./endpoints/User/createUser");
const searchUser_1 = require("./endpoints/User/searchUser");
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
app.post("/users", createUser_1.createUser);
app.get("/users", searchUser_1.searchUser);
app.post("/products", createUser_1.createUser);