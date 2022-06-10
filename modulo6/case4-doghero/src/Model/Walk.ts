export enum Duration {
    MEIAHORA = "30",
    HORA = "60",
}

export enum STATUS {
    INICIO = "NÃO REALIZADO",
    ANDAMENTO = "EM ANDAMENTO",
    FINALIZADO = "FINALIZADO"
}

export type CreateWalkInputDTO = {
    date_schedule: string,
    duration: Duration,
    latitude: number,
    longitude: number,
    pets: number,
    date_start: string,
    date_end: string
}

export type StartWalkInputDTO = {
    id: string,
    date_start: string
}

export type FinishWalkInputDTO = {
    id: string,
    date_end: string
}

export class Walk {

    constructor(
        private id: string,
        private status: STATUS,
        private date_schedule: string,
        private price: number,
        private duration: string,
        private latitude: number,
        private longitude: number,
        private pets: number,
        private date_start: string,
        private date_end: string
    ) {
        this.id = id,
            this.status = status,
            this.date_schedule = date_schedule,
            this.price = price,
            this.duration = duration,
            this.latitude = latitude,
            this.longitude = longitude,
            this.pets = pets,
            this.date_start = date_start,
            this.date_end = date_end
    }
    public getId() {
        return this.id
    }

    public getStatus() {
        return this.status
    }

    public getDataDeAgendamento() {
        return this.date_schedule
    }

    public getprice() {
        return this.price
    }

    public getduration() {
        return this.duration
    }

    public getLatitude() {
        return this.latitude
    }

    public getLongitude() {
        return this.longitude
    }

    public getPets() {
        return this.pets
    }

    public getHorarioInicio() {
        return this.date_start
    }

    public getHorarioTermino() {
        return this.date_end
    }

    static toWalkModel(data: any): Walk {
        return new Walk(
            data.id,
            data.status,
            data.date_schedule,
            data.price, data.duration,
            data.latitude,
            data.longitude,
            data.pets,
            data.date_start,
            data.date_end)
    }
}