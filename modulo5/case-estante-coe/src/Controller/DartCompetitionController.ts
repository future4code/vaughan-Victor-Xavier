import { Request, Response } from "express";
import DartCompetitionBusiness from "../Business/DartCompetition/DartCompetitionBusiness";
import { DartCompetitionDatabase } from "../Data/DartCompetitionDatabase";

import { InputDTO } from "../Model/Competition";


export default class DartCompetitionController {
    private dartCompetitionBusiness: DartCompetitionBusiness;
    constructor(
    ) {
        this.dartCompetitionBusiness = new DartCompetitionBusiness(new DartCompetitionDatabase())
    }

    createDart = async (req: Request, res: Response) => {
        const { competition, athlete, valor, unity } = req.body

        const input: InputDTO = {
            competition,
            athlete,
            valor,
            unity
        }

        try {
            await this.dartCompetitionBusiness.insertDart(input)
            res.send({ message: `Atleta inscrito na competição ' ${competition}'` })

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    finishDart = async (req: Request, res: Response) => {
        const { competition } = req.body

        try {
            await this.dartCompetitionBusiness.finishDart(competition)
            res.send({ message: "Competição finalizada." })

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    rankingDart = async (req: Request, res: Response) => {
        const { competition } = req.body

        try {
            const ranking = await this.dartCompetitionBusiness.getRanking(competition)
            res.send({ message: "Resultado da competição", ranking })

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

}