import { UserDatabase } from './../data/UserDataBase';
import { Authenticator } from './../services/token';
import { Request, Response } from "express";




export async function profileUser(req: Request, res: Response){
    try {
        const token = req.headers.authorization as string

        if (!token) {
            res.status(422).send("O endpoint exige uma autenticação")
        }
        
        const authenticator = new Authenticator()
        const tokenData = authenticator.getData(token)
        console.log(tokenData)
        
        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUser()

        res.status(200).send(user)
    } catch (err: any) {
        res.status(400).send({
           message: err.message
        });
     }
} 


