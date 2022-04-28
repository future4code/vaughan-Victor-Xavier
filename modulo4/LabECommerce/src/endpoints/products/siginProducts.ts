import { Request, Response } from "express"
import { connection } from "../../data/connection"


const create = async (
    name: string,
    price: number,
    image_url: string
): Promise<any> => {
    await connection("labecommerce_products")
        .insert({
            id: Date.now().toString(),
            name: name,
            price: price,
            image_url: image_url
        }
        )
}


export async function siginProducts(
    req: Request,
    res: Response
): Promise<void> {
    let errorCode = 422

    const { name, price, image_url } = req.body


    try {
        if (!name || !price || !image_url) {
            errorCode = 422;
            throw new Error("Um dos seguintes campos estávazio ou inválido: name, price, image_url");
        }
        const sigin = await create(name, price, image_url);

        res.status(200).send({
            message: `Produto criado com sucesso ${sigin} `
        })
    } catch (error) {
        res.status(500).send("Internal server error")
    }
} 