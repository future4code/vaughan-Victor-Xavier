import { RunnerBusiness } from './../business/RunnerBusiness';
import { Request, Response } from "express";
import { RunnerDatabase } from "../data/RunnerDatabase";
import { RunnerInputDTO } from "../model/Runner";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";
import { BaseDatabase } from '../data/BaseDatabase';


const runnerController = new RunnerBusiness(
    new RunnerDatabase(),
    new IdGenerator(),
    new TokenGenerator(),
    new HashManager(),
    
)
export class RunnerController {
    async signupRunner(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const input: RunnerInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible
            }


            const runner = await  runnerController.createRunner(input ,token)
          
            res.status(200).send({message: "Banda cadastrada!", token: token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}