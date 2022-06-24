import { Request, Response } from "express"
import DogWalkingBusiness from "../Business/DogWalkingBusiness";
import DogWalkingData from "../data/DogWalkingData";

import { CreateWalkInputDTO, FinishWalkInputDTO, StartWalkInputDTO } from "../Model/Walk";

export default class DogWalkingController {
    private dogWalkingBusiness: DogWalkingBusiness
    constructor(

    ) {
        this.dogWalkingBusiness = new DogWalkingBusiness(new DogWalkingData())
    }

    create = async (req: Request, res: Response) => {
        const {
            date_schedule,
            duration,
            latitude,
            longitude,
            pets,
            date_start,
            date_end
        } = req.body

        const input: CreateWalkInputDTO = {
            date_schedule,
            duration,
            latitude,
            longitude,
            pets,
            date_start,
            date_end
        }

        try {
            const walk = await this.dogWalkingBusiness.create(input)
            res.send({ message: "Caminhada registrada com sucesso!", walk })
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    start = async (req: Request, res: Response) => {
        const { id, date_start } = req.body

        const input: StartWalkInputDTO = {
            id,
            date_start
        }

        try {
            const walk = await this.dogWalkingBusiness.startWalk(input)
            res.send({ message: "Caminhada iniciada!", walk })
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    finish = async (req: Request, res: Response) => {
        const { id, date_end } = req.body

        const input: FinishWalkInputDTO = {
            id,
            date_end
        }

        try {
            const walk = await this.dogWalkingBusiness.finishWalk(input)
            res.send({ message: "Caminhada Finalizada!", walk })
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    show = async (req: Request, res: Response) => {
        const { id } = req.body

        try {
            const walkTime = await this.dogWalkingBusiness.show(id)
            res.send({ walk: walkTime })
        } catch (error: any) {
            res.statusCode = 400 
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    getWalks = async (req: Request, res: Response) => {
        const { page, walksPerPage } = req.body

        try {
            const walks = await this.dogWalkingBusiness.index(page, walksPerPage)
            res.send({ walks: walks })
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
}