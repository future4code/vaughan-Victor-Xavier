"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const signup_1 = require("./endpoint/signup");
app_1.app.post("/user/signup", signup_1.signUp);
