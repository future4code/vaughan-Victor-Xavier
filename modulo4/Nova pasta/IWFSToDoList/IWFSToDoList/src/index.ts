import { knex } from 'knex';
// no index.ts:

import express, { Express, Request, Response } from "express";

import cors from "cors";
import dotenv from "dotenv";
import connection from "./connection";
import { AddressInfo } from "net";
import { createExternalModuleExport } from "typescript";

dotenv.config();



const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});


const createUser = async (
    name: string,
    nickname: string,
    email: string
): Promise<any> => {
    await connection.insert({
        id: Date.now().toString(),
        name: name,
        nickname: nickname,
        email: email
    })
        .into("User");

}

app.post("/user", async (req: Request, res: Response) => {
    let errorCode = 400

    try {

        const create = await createUser(req.body.name, req.body.nickname, req.body.email);

        res.status(200).send({ message: "criado com sucesso", create })
    }

    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }


})

app.get("/user/:id", async (req, res): Promise<any> => {
    try {

        const searchId = async (id: string) => {
            const result = await connection("User")
            //     .select("id", "name")
            //     .from("User"),
            // .where({ id: `${id}` })
        return result
    }
    res.status(200).send({ message: "achou", result })

} catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)

}
})

