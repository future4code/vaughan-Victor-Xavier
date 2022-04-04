import express, { Request, Response } from "express";
import { users } from "./data"
import { AddressInfo } from "net";
import { Extrato } from "./data";

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

// criar cliente novo

app.post("/users/create-account", (req, res) => {
    let errorCode = 400
    const token = req.headers.authorization
    try {
        const { name, cpf, date, saldo } = req.body

        if (!token) {
            errorCode = 401
            throw new Error("Necessário token de autorização");

        }
        if (!name && !cpf && !date) {
            errorCode = 404
            throw new Error("Alguns dos seguintes campos em branco: Name,CPF ou Date(data de nascimento)");

        }
        //formato cpf
        const formatoCPF = /\d{3}\.\d{3}\.\d{3}\-\d{2}/
        if (!formatoCPF.test(cpf)) {
            errorCode = 401
            throw new Error("erro no formato do cpf");

        }
        const now = new Date()
        const idade = date - now.getFullYear()
        if (idade < 18) {
            errorCode = 404
            throw new Error("Idade abaixo dos 18 anos");

        }
        const consultaCPF = users.find((userCPF) => {
            return userCPF.cpf === cpf
        })
        if (consultaCPF) {
            errorCode = 404
            throw new Error("CPF ja cadastrado");

        }
        users.push(name, cpf, date, saldo)
        res.status(200).send(users)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })

    }
})





// Acesso de conta do cliente pelo nome e Cpf

app.get("/users", (req, res) => {
    let errorCode = 400
    try {
        const nameUser: string = req.query.name as string
        const cpfUser: string = req.query.cpf as string
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





app.get("/user/cpf", (req, res) => {
    let errorCode: number = 422
    try {
        const cpfuser = req.query.cpf

        const filtro: any = users.filter((user) => {
            return user.cpf === cpfuser
        })
        const serchcpf = users.find((cpf) => {
            return cpf.cpf === cpfuser
        }
        )
        if (!serchcpf) {
            errorCode = 422;
            throw new Error("CPF inválido!");
        }
        res.status(200).send({ saldo: filtro[0].saldo })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})
