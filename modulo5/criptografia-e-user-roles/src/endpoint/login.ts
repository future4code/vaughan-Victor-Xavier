import { Request, Response } from "express";
import { getUserByEmail } from "../../getUserByEmail";
import connection from "../conection";
import { HashManager } from "../services/generateHash";
import { Authenticator } from "../services/token";
import { authenticationData } from "../types/types";



export default async function login(req: Request, res: Response): Promise<void> {

    try {
     
        const { email, password } = req.body
      
        const userData = {
            email,
            password,
        };

       
        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 401
            throw new Error("formato de email invalido");

        }

        const user = await getUserByEmail(userData.email);
       

        if (!user) {
            res.statusCode = 401;
            throw new Error("Usuário inexistente")
        }
        let hashManager: HashManager = new HashManager()
        const passwordIsCorrect: boolean = hashManager.compareHash(
            password,
            user.password
        )
        if (!passwordIsCorrect) {
            res.statusCode = 401;
            throw new Error("Senha incorreta")
        }

        const authenticator: Authenticator = new Authenticator()
        const payload: authenticationData = {
            id: user.id,
            role: user.role
        }
        const token = authenticator.generateToken(payload)
        res.status(200).send(token)

    }
    catch (error: any) {
        if (res.statusCode === 200) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        }
        else {
            res.send({message:error.message})
        }
    }

}



