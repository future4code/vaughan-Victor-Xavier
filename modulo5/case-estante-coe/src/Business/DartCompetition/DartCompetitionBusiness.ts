import { Competition, InputDTO, Progretion } from "../../Model/Competition";
import { IdGenerator } from "../../Services/IdGeneretor";
import { DartCompetitionRepository } from "./DartCompetitionRepository";

export default class DartCompetitionBusiness {
    private idGenerator: IdGenerator;
    private competitionData: DartCompetitionRepository;

    constructor(
        competitionDataImplementation: DartCompetitionRepository
    ) {
        this.idGenerator = new IdGenerator
        this.competitionData = competitionDataImplementation
    }

    insertDart = async (input: InputDTO) => {
        const { athlete, competition, unity, valor } = input

        if (!competition || !athlete || !valor || !unity) {
            throw new Error("Preencha todos os campos")
        }

        if (typeof competition !== "string" || typeof athlete !== "string" || typeof valor !== "string" || typeof unity !== "string") {
            throw new Error("Preencha valores válidos")
        }

        if (unity !== "m") {
            throw new Error("unity inválida!")
        }

        const verificaProgretionCompetition = await this.competitionData.getSituationByName(competition, Progretion.FINISH)

        if (verificaProgretionCompetition?.length > 0) {
            throw new Error("Competição finalizada.")
        }

        const verificaChances = await this.competitionData.getAthleteCount(athlete, competition)

        if (verificaChances >= 3) {
            throw new Error("O athlete já realizou todos os lançamentos!")
        }

        if (unity !== "m") {
            throw new Error("unity inválida!")
        }

        const id = this.idGenerator.generate()

        const progretion = Progretion.PROGRESS

        const novacompetition = new Competition(
            id,
            competition,
            athlete,
            valor,
            unity,
            progretion
        )

        await this.competitionData.insert(novacompetition)


    }

    finishDart = async (input: string) => {
        const competition = input

        const progretion = Progretion.FINISH

        const verifyCompetition = await this.competitionData.getCompetitionByName(competition)

        if (!verifyCompetition) {
            throw new Error("Competição ou modalidade não existente.")
        }

        await this.competitionData.updateSituation(progretion, competition)
    }

    getRanking = async (input: string) => {
        const competition = input

        const verificacompetition = await this.competitionData.getCompetitionByName(competition)

        if (!verificacompetition) {
            throw new Error("Competição ou modalidade não existente")

        }

        const resultado = await this.competitionData.getRanking(competition)

        return resultado
    }
}