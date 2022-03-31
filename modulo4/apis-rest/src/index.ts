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


//1a) Get / b)"/users"
app.get("/users", (req, res) => {
    try {
        res.status(200).send({ users })
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})


app.get("/users/type", (req, res) => {

    try {
        // const type: string = req.query.type as string
        const { type } = req.body
        if (type !== type.toLowerCase() && !type) {
            throw new Error("Informe um 'type' válido")

        } else {
            const user = users.filter((user) => {
                return user.type.toLowerCase() === type.toLowerCase()
            })
            res.status(200).send(user)
        }

    } catch (error: any) {
        switch (error.message) {
            case "Por gentileza, informar um type válido":
                res.status(401)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})