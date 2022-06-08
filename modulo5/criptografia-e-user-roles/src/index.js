"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const login_1 = __importDefault(require("./endpoint/login"));
const signup_1 = require("./endpoint/signup");
app_1.app.post("/user/signup", signup_1.signUp);
app_1.app.post("/user/login", login_1.default);
