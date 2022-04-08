
import connection from './connection';
import { Request, Response } from "express";

import { AddressInfo } from "net";
import express, { Express } from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());


app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server ta on, pai  http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;




const searchActor = async (name: string): Promise<void> => {
    const resultado = await connection
        .raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return resultado[0]
};


const countActors = async (gender: string): Promise<void> => {
    const result = await connection
        .raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

    const count = result[0][0].count;
    return count;
};

const attSalaryActor = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
};

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
};

const averageSalary = async (gender: string): Promise<void> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

    return result[0][0].average;
};

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count = await countActors(req.query.gender as string);
        res.status(200).send({
            gender: count,
        });
    } catch (err: any) {
        res.status(400).send({
            message: err.message
        });
    }
});

app.put("/actor", async (req: Request, res: Response) => {

    try {
        await attSalaryActor(req.body.salary, req.body.id);
        res.status(200).send({message: "Alterado com sucesso"})
        
    }
    catch (error: any) {
        res.status(400).send({
            message: error.message,
          });

    }


})
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (error:any) {
      res.status(400).send({
        message: error.message,
      });
    }
  });







