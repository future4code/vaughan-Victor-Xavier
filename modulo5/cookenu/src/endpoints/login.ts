import { Authenticator } from './../services/token';
import { authenticationData } from './../types/types';
import { CreateUserModel } from './../model/CreateUserModel';
import { UserDatabase } from './../data/UserDataBase';
import { HashManager } from './../services/generatehash';



import { IdGeneretor } from './../services/idGeneretor';

import { Request, Response } from "express";
;


export async function login(req: Request, res: Response) {
    let statusCode = 400
    try {
        const {email, password} = req.body
        

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

       

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)
        console.log(user)
        if (!user) {
            res.status(409).send("email nao cadastrado")
        }

      

        const hasManager = new HashManager()
   const passwordIsCorrect=hasManager.compareHash(password,user.getpassword())
        
   if(!passwordIsCorrect){
       res.status(401).send("email e/ou senha incorreto(s)")
   }
   
   const autenticator = new Authenticator()
        const token = autenticator.generateToken({ id:user.getId(), role:user.getrole() })

        res.status(201).send("usuario logado com sucesso " + token)
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {

            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}