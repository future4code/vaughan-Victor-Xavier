import { Request, Response } from "express"
import { connection } from "../data/connection"


// 1 a)
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.query

        if (!name) {
            throw new Error(`Não foi possivel achar o titulo '${name}'`)
        }
        const filtraNome = await connection("aula48_exercicio")
            .select("*")
            .where("name", "like", `%${name}%`)
        res.status(200).send(filtraNome)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}


// 1  b)

export const getTypeUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { type } = req.params

        if (!type) {
            throw new Error(`Não foi possivel achar o tipo '${type}'`)
        }
        const filtraType = await connection("aula48_exercicio")
            .select("*")
            .where("type", "like", `%${type}%`)
        res.status(200).send(filtraType)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}

// 2  a)

export const ordenacaoUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name} = req.query
        let ordernar = req.query.ordenacao as string
        if (ordernar.toUpperCase() !== 'ASC' && ordernar.toUpperCase() !== 'DESC') {
            ordernar = 'ASC'
        }
        if (!ordernar) {
            const result = await connection("aula48_exercicio")
            .select("*")
            .orderBy('email', `${ordernar}`)

        }
        const result = await connection("aula48_exercicio")
            .select("*")
            .orderBy('name', `${ordernar}`)
            .orderBy('type', `${ordernar}`)



        res.status(200).send(result)
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}


// 3)

export const listUsers = async(req: Request,res: Response): Promise<void> =>{
   try {

       let quantidadeExibida = 5
       let pagina = Number(req.query.pagina)
       let offset = quantidadeExibida * (pagina - 1)

       const result = await connection("aula48_exercicio")
           .select("*")
           .limit(quantidadeExibida)
           .offset(offset)


       res.status(200).send(result)
   } catch (error: any) {
       res.send(error.message || error.sqlMessage)
   }
} 


//  4)

export const allEndpoints = async(req: Request,res: Response): Promise<void> =>{
   try { const { name, type } = req.query

   let ordernar = req.query.ordenacao as string
   let pagina = Number(req.query.pagina)
   if (!pagina) {
      pagina = 1 
   }
   let quantidadeExibida = 5
   let offset = quantidadeExibida * (pagina - 1)
   if (ordernar.toUpperCase() !== 'ASC' && ordernar.toUpperCase() !== 'DESC') {
      ordernar = 'DESC'
  }


  const result = await connection("aula48_exercicio")
      .select("*")
      .where("name", "like", `%${name}%`)
      .where("type", "like", `%${type}%`)
      .orderBy('name', `${ordernar}`)
      .limit(quantidadeExibida)
      .offset(offset)
      res.status(200).send(result)
   } catch (error: any) {
       res.send(error.message || error.sqlMessage)
   }
}
