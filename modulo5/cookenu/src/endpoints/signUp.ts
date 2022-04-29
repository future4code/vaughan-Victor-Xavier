import { Authenticator } from './../services/token';
import { authenticationData } from './../types/types';
import { CreateUserModel } from './../model/CreateUserModel';
import { UserDatabase } from './../data/UserDataBase';
import { HashManager } from './../services/generatehash';



import { IdGeneretor } from './../services/idGeneretor';

import { Request, Response } from "express";
;


export async function signup(req: Request, res: Response) {
    let statusCode = 400
    try {
        const { name, email, password, role } = req.body
        console.log(name, email, password, role)
        if (!name) {
            res.statusCode = 422
            throw new Error("'name' nao informado");
        }

        if (!email) {
            res.statusCode = 422
            throw new Error("'email' nao informado");
        }

        //erro de formato do email invalido por causa do @
        if (!email || email.indexOf("@") === -1) {
            throw new Error("formato de email invalido");
        }

        if (!password) {
            res.statusCode = 422
            throw new Error("'password' nao informado");
        }

        // erro de senha menor q 6 caraqteres
        if (!password || password.length < 6) {
            throw new Error("senha muito curta");
        }

        if (!role) {
            res.statusCode = 422
            throw new Error("'role' nao informado");
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)
        console.log(user)
        if (user) {
            res.status(409).send("email ja cadastrado")
        }

        const idGeneretor = new IdGeneretor();
        const id = idGeneretor.generateId()
        console.log("id" + id)

        const hasManager = new HashManager()
        const hashPassword = hasManager.createHash(password)
        console.log("pass" + hashPassword)
        const newUser = new CreateUserModel(id, name, email, hashPassword, role)
        await userDatabase.createUser(newUser)

        const autenticator = new Authenticator()
        const token = autenticator.generateToken({ id, role })

        res.status(201).send("usuario cadastrado " + token + newUser)
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {

            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}