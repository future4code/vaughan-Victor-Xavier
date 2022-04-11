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




const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT id, nickname FROM User WHERE id = '${id}'
    `)
      return result[0][0]
  }

  app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    let errorCode = 400

    try {
      const result = await getUserById(id)
      if(!result) {
        errorCode=422
        throw new Error ("Id não encontrado")
      }
      res.send({result: result})
    } catch (err:any) {
      res.status(500).send({message: err.message});
    }
});


app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    const {name, nickname} = req.body
    let errorCode = 400

    try {
        await connection("User")
        .update({
          name,
          nickname
        })
        .where("id",id)
        if(!name || !nickname) {
            errorCode=422
            throw new Error ("Preencha todos os campos")
        }
      res.send({message: "Usuário editado com sucesso"})
    } catch (err:any) {
      res.status(500).send({message: err.message});
    }
});


const createTask = async (
    title: string,
    description: string,
    limit_date: Date,
    creator_user_id: string
 ): Promise<any> => {
    await connection("TodoListTask")
       .insert(
          {
             id: Date.now().toString(),
             title: title,
             description: description,
             limit_date: limit_date,
             creator_user_id: creator_user_id
          })
 
 };
 
 app.post("/task", async (req, res) => {
    let errorCode = 422
    try {
       if (!req.body.title || !req.body.description || !req.body.limit_date || !req.body.creator_user_id) {
          errorCode = 422;
          throw new Error("Campo vazio ou inválido!");
       }
       const createT = await createTask(req.body.title, req.body.description, req.body.limit_date, req.body.creator_user_id);
 
       res.status(200).send({
          message: "Criado com sucesso!", createT
       })
    } catch (err: any) {
       res.status(400).send({
          message: err.message,
       });
    }
 });




 app.get("/users", async (req, res): Promise<void> =>{
    try {
        const resultado = await connection("User")
        .select("id", "nickname")
        res.status(200).send({users: resultado})
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
 }) 