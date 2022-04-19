import { getAdressInfo } from './../services/getAdressInfo';
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
    try {
        const { zipcode, number, complement } = req.body

        const address = await getAdressInfo(zipcode)

        if (!address) {
            throw new Error("erro no get addres");

        }

        res.send({
            Estado: address.state,
            Bairro: address.district, Cidade: address.city, Logradouro: address.street,
            zipcode, number, complement
        })
    } catch (error) {
        res.send({ message: "CEP inesistente" })

    }
}