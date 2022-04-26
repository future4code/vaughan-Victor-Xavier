import { user,authenticationData } from './../types/types';
import { Response, Request } from "express";
import { send } from "process";
import connection from "../conection";

import { genereteId } from "../services/idGenerator";
import { Authenticator } from "../services/token";
import { HashManager } from '../services/generateHash';




export async function signUp(req: Request, res: Response) {
    console.log("chegou")
    const { email, password,role } = req.body
    try {
        if (!email || email.indexOf("@") === -1) {
            throw new Error("formato de email invalido");

        }
        if (!password || password.length < 6) {
            throw new Error("senha muito curta");

        }

        if(!role){
            throw new Error("Preencha o campo 'role' ");
            
        }
        const id = genereteId();
        let hashManager: HashManager = new HashManager()
        const cypherPassword = hashManager.createHash(password)
  

        const userData: user = {
            id,
            email,
            password: cypherPassword,
            role

        }


        await connection('userAulaAltenticacao')
            .insert(userData)

        const authenticator: Authenticator = new Authenticator()


        const payload: authenticationData = {
            id: userData.id,
            role
        }

        const token = authenticator.generateToken(payload)
        res.status(201).send("usuario criado com sucesso. " + token)

    } catch (error:any) {
        res.status(500).send(error.message)

    }

}



