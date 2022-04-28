import { Request, Response } from "express"
import { connection } from "../../data/connection"




export async function searchUser(
    req: Request,
    res: Response
): Promise<any> {
    let errorCode = 422
    try {
        const listUser = await connection("labecommerce_users")
        .select("*")
        .from("labecommerce_users")
        res.status(200).send({users: listUser})
    }catch (error) {
        res.status(500).send("Internal server error")
    }
}