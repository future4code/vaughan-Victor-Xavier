import { Competition, Progretion } from "../Model/Competition";
import { BaseDatabase } from "./BaseDatabase";
import { RunnerCompetitionRepository } from '../Business/RunnerCompetition/RunnerCompetitionRepository';

export class RunnerDatabase extends BaseDatabase implements RunnerCompetitionRepository {

    protected TABLE_NAME = "Runner_CoeCase"

    insert = async (competition: Competition) => {
        try {

            await BaseDatabase
                .connection(this.TABLE_NAME)
                .insert(competition)

            return competition
        } catch (error: any) {
            throw new Error("Erro ao criar atleta no banco de dados. Verifique se o atleta ja está inscrito ")
        }
    }
    getByAthlete = async (athlete: string) => {
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM Runner_CoeCase WHERE athlete = '${athlete}';
            `)

            return result[0]
        } catch (error: any) {
            throw new Error("Atleta não encontrado")
        }
    }

    getCompetitionByName = async (competition: string) => {
        try {
            const result = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select()
                .where("competition", competition)

            return result[0]
        } catch (error: any) {
            throw new Error("Competição não encontrado.")
        }
    }

    getCompetitionAndAthlete = async (competition: string) => {
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT athlete FROM ${this.TABLE_NAME} WHERE competition = '${competition}';
            `)

            return result[0]
        } catch (error: any) {
            throw new Error("Erro ao buscar athlete por competição.")
        }
    }


    getSituationByName = async (competition: string, progretion: Progretion.FINISH) => {
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT Progretion FROM ${this.TABLE_NAME} WHERE competition = '${competition}' and Progretion = '${progretion}';
            `)

            return result[0]
        } catch (error: any) {
            throw new Error("'progress' não encontrado.")
        }
    }

    updateSituation = async (situation: Progretion.FINISH, competition: string) => {
        try {
            const result = await BaseDatabase.connection.raw(`
                UPDATE ${this.TABLE_NAME} SET Progretion = '${situation}' WHERE competition = '${competition}';
            `)

            return result[0]
        } catch (error: any) {
            throw new Error("Erro ao atualizar competição. Verifique o nome e o progresso da competição.")
        }
    }

    getRanking = async (competition: string) => {
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${this.TABLE_NAME} WHERE competition = '${competition}' ORDER BY valor ASC;
            `)

            return result[0]
        } catch (error: any) {
            throw new Error("Erro ao buscar ranking da competição no banco de dados.")
        }
    }

    getAthleteCount = async (athlete: string, competition: string) => {
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT COUNT(athlete) as count FROM ${this.TABLE_NAME} WHERE athlete = '${athlete}' AND competition = '${competition}';
            `)

            return result[0][0].count
        } catch (error: any) {
            throw new Error("Erro ao buscar count do atleta no banco de dados.")
        }
    }


}