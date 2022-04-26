import { USER_ROLES } from './../types/types';
import connection from "../conection"
import { getData } from "../services/getData"
import { Request, Response } from 'express'




export const getInformationUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    const token = req.headers.authorization as string

    try {
        const verifyToken = getData(token)

        if (verifyToken.role === USER_ROLES.NORMAL) {
            errorCode = 403
            throw new Error("Usuário sem permissão, somente usuário com role = NORMAL, podem ter acesso a esse edpoint")
        }
        const [user] = await connection('User')
            .select()
            .where({ id: verifyToken.id })

        res.status(200).send({ id: user.id, email: user.email, role: user.role })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}