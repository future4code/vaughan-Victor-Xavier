import { IdGenerator } from "../services/IdGenerator"
import {  RunnerInputDTO } from "../model/Runner"
import { HashManager } from "../services/HashManager";
import { BandDatabase } from "../data/BandDatabase";
import { Authenticator } from "../services/Authenticator";
import { RunnerDatabase } from "../data/RunnerDatabase";
import { TokenGenerator } from "../services/TokenGenerator";


export class RunnerBusiness {
    constructor(
        private runnerDatabase: RunnerDatabase,
        private idGenerator: IdGenerator,
        private tokenGenerator: TokenGenerator,
        private hashGenerator: HashManager

    ) { }

    async createRunner(band: RunnerInputDTO, token: string) {

        
  

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const authenticator = new Authenticator();
        const tokenData = authenticator.getData(token);

        if (tokenData.role === "NORMAL") {
            throw new Error("Role invalido");
        }
        const bandDatabase = new BandDatabase();
        await bandDatabase.createBand(id, band.name, band.music_genre, band.responsible);


        return tokenData;
    }



}