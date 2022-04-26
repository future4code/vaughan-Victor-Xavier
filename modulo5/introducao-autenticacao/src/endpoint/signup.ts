import { Response, Request } from "express";
import { send } from "process";
import connection from "../conection";
import { createUser } from "../model/create";
import { genereteId } from "../services/idGenerator";
import { Authenticator } from "../services/token";
import { authenticationData, user } from "../types/types";



export async function signUp(req: Request, res: Response) {
    console.log("chegou")
    const { email, password } = req.body
    try {
        if (!email || email.indexOf("@") === -1) {
            throw new Error("formato de email invalido");

        }
        if (!password || password.length < 6) {
            throw new Error("senha muito curta");

        }
        const id = genereteId();

        const userData: user = {
            id,
            email,
            password
        }


        await connection('userAulaAltenticacao')
            .insert(userData)

        const authenticator: Authenticator = new Authenticator()


        const payload: authenticationData = {
            id: userData.id
        }

        const token = authenticator.GenerateToken(payload)
        res.status(201).send("usuario criado com sucesso. " + token)

    } catch (error:any) {
        res.status(500).send(error.message)

    }

}



