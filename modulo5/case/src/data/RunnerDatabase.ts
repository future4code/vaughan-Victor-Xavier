
import { Athlete } from "../model/Athlete";
import { BaseDatabase } from "./BaseDatabase";

export class RunnerDatabase extends BaseDatabase {

  private static TABLE_NAME = "Athlete_CoeCase ";

  public async createAthlete(
    id: string,
    competition: string,
    athlete: string,
    value: string,
    unity: string,
    role: string
  ): Promise<void> {
    try {
      await BaseDatabase.connection()
        .insert({
          id,
          competition,
          athlete,
          value,
          unity,
          role
        })
        .into(RunnerDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserBycompetition(competition: string): Promise<Athlete> {
    const result = await BaseDatabase.connection()
      .select("*")
      .from(RunnerDatabase.TABLE_NAME)
      .where({ competition });

    return Athlete.toUserModel(result[0]);
  }

}