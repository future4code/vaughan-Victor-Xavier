import { RunnerCompetitionBusiness } from "../Business/RunnerCompetition/RunnerBusiness";
import { InputDTO } from "../Model/Competition";
import { Request, Response } from "express";
import { RunnerDatabase } from "../Data/RunnerDatabase";

export class RunnerCompetitionController {
    private runnerCompetitionBusiness: RunnerCompetitionBusiness;
    constructor(
    ) {
        this.runnerCompetitionBusiness = new RunnerCompetitionBusiness(new RunnerDatabase())
    }

    createRunner = async (req: Request, res: Response) => {
        const { competition, athlete, valor, unity } = req.body

        const input: InputDTO = {
            competition,
            athlete,
            valor,
            unity
        }

        try {
            await this.runnerCompetitionBusiness.insertRunner(input)
            res.send({ message: "Atleta inscrito na competição" })

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    finishRun = async (req: Request, res: Response) => {
        const { competition } = req.body

        try {
            await this.runnerCompetitionBusiness.finishRun(competition)
            res.send({ message: "Competição finalizada." })

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    rankingRun = async (req: Request, res: Response) => {
        const { competition } = req.body

        try {
            const ranking = await this.runnerCompetitionBusiness.getRanking(competition)
            res.send({ message: "Resultado da competição", ranking })

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

}