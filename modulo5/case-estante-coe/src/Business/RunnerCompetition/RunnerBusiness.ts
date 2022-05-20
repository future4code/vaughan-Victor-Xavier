import { Competition, InputDTO, Progretion } from "../../Model/Competition";
import { IdGenerator } from "../../Services/IdGeneretor";
import { RunnerCompetitionRepository } from "./RunnerCompetitionRepository";


export class RunnerCompetitionBusiness {
    private idGenerator: IdGenerator;
    private competitionData: RunnerCompetitionRepository;

    constructor(
        competitionDataImplementation: RunnerCompetitionRepository
    ) {
        this.idGenerator = new IdGenerator
        this.competitionData = competitionDataImplementation
    }

    insertRunner = async (input: InputDTO): Promise<void> => {
        const { athlete, competition, unity, valor } = input

        if (!competition || !athlete || !valor || !unity) {
            throw new Error("Preencha todos os campos")
        }

        if (typeof competition !== "string" || typeof athlete !== "string" || typeof valor !== "string" || typeof unity !== "string") {
            throw new Error("Preencha valores válidos")
        }

        if (unity !== "s") {
            throw new Error("unity inválida!")
        }

        const verificaProgretioncompetition = await this.competitionData.getSituationByName(competition, Progretion.FINISH)

        if (verificaProgretioncompetition.length > 0) {
            throw new Error("Competição finalizada.")
        }

        const verificaCompetidor = await this.competitionData.getByAthlete(athlete)

        if (verificaCompetidor) {
            const verificaQualcompetition = await this.competitionData.getCompetitionAndAthlete(competition)

            if (verificaQualcompetition === athlete) {
                throw new Error(" 'athlete' já realizou essa prova")
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
    }

    finishRun = async (input: string) => {
        const competition = input

        const progretion = Progretion.FINISH

        const verificacompetition = await this.competitionData.getCompetitionByName(competition)

        if (!verificacompetition) {
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