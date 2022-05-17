"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const users_json_1 = __importDefault(require("./users.json"));
const recipes_json_1 = __importDefault(require("./recipes.json"));
const printError = (error) => { console.log(error.sqlMessage || error.message); };
const createTables = () => connection_1.connection
    .raw(`

      CREATE TABLE IF NOT EXISTS aula49_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS aula49_recipes (
         id VARCHAR(255) PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         description TEXT(1023),
         user_id VARCHAR(255),
         created_at BIGINT,
         FOREIGN KEY(user_id) REFERENCES aula49_users(id) 
      );

`)
    .then(() => { console.log("Tabelas criadas"); })
    .catch(printError);
const insertUsers = () => (0, connection_1.connection)("aula49_users")
    .insert(users_json_1.default)
    .then(() => { console.log("Usuários criados"); })
    .catch(printError);
const insertRecipes = () => (0, connection_1.connection)("aula49_recipes")
    .insert(recipes_json_1.default)
    .then(() => { console.log("Receitas criadas"); })
    .catch(printError);
const closeConnection = () => { connection_1.connection.destroy(); };
createTables()
    .then(insertUsers)
    .then(insertRecipes)
    .finally(closeConnection);
