export class Competition {

    constructor(
        private id: string,
        private competition: string,
        private athlete: string,
        private valor: string,
        private unity: "s" | "m",
        private progretion: Progretion

    ) { }

    public getId() {
        return this.id
    }

    public getCompetition() {
        return this.competition
    }

    public getAthlete() {
        return this.athlete
    }

    public getValue() {
        return this.valor
    }

    public getUnity() {
        return this.unity
    }

    public getProgretion() {
        return this.progretion
    }

    static toCompetitionModel(data: any): Competition {
        return new Competition(data.id, data.competition, data.athlete, data.valor, data.unity, data.progretion)
    }

}

export type InputDTO = {
    competition: string;
    athlete: string;
    valor: string;
    unity: string;
}

export enum Progretion {
    PROGRESS = "IN PROGRESS",
    FINISH = "FINISH"
}

export type InputcompetitionDTO = {
    competition: string
}


