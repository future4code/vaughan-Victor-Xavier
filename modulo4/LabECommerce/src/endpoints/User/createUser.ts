

import { Request, Response } from "express";
import { connection } from "../../data/connection"



const create = async (
    name: string,
    email: string,
    password: string
): Promise<any> => {
    await connection
        .insert({
            id: Date.now().toString(),
            name: name,
            email: email,
            password: password
        })
        .into("labecommerce_users")
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {


        const { name, email, password } = req.body

        const user = await create(name, email, password)


        res.status(201).send(`Usuario ${user} cadastrado com sucesso.`)


    } catch (error) {
        res.status(500).send("erro interno do servidor")

    }


}


