import { Competition, Progretion } from "../../Model/Competition"

export interface DartCompetitionRepository {
    insert(competition: Competition): Promise<Competition>
    getByAthlete(athlete: string): Promise<Competition>
    getCompetitionByName(competition: string): Promise<Competition>
    updateSituation(situation: Progretion.FINISH, competition: string): Promise<void>
    getSituationByName(competition: string, situation: Progretion.FINISH): Promise<any>
    getCompetitionAndAthlete(competition: string): Promise<string>
    getRanking(competition: string): Promise<Competition[]>
    getAthleteCount(athlete: string, competition: string): Promise<number>
}