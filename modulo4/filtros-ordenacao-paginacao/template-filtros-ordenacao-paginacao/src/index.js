"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const getAllUsers_1 = require("./endpoints/getAllUsers");
app_1.app.get("/users", getAllUsers_1.getAllUsers);
app_1.app.get("/users/order", getAllUsers_1.ordenacaoUsers);
app_1.app.get("/users/:type", getAllUsers_1.getTypeUsers);
