import express, { Request, Response } from "express";
import { users } from "./data"
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;


// Acesso de conta do cliente pelo nome e Cpf

app.get("/users", (req, res) => {
    let errorCode = 400
    try {
        const nameUser:string = req.query.name as string
        const cpfUser:string = req.query.cpf as string
        const findAccount = users.filter((user) =>
            user.name === nameUser && user.cpf === cpfUser
        )
        const findName = users.find((name) => {
            return name.name.toLowerCase() === nameUser.toLowerCase()
        })
        const findCPF = users.find((cpf) => {
            return cpf.cpf.toLowerCase() === cpfUser.toLowerCase()
        })

        if (!findName) {
            errorCode = 422
            throw new Error("Name  não cadastrados");

        }

        if (!findCPF) {
            errorCode = 422
            throw new Error("CPF  não cadastrados");
        }


        res.status(200).send(findAccount)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})
