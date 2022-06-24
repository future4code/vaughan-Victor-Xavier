import { CalculatePrice } from './../Services/CalculatePrice';
import { IdGenerator } from './../Services/IdGeneretor';
import { CreateWalkInputDTO, Duration, FinishWalkInputDTO, StartWalkInputDTO, STATUS, Walk } from "../Model/Walk";
import { FormataHoras } from "../Services/formatHours";
import { dogWalkingRepository } from "./DogWalkingRepository";

export default class DogWalkingBusiness {
    private idGenerator: IdGenerator;
    private dogWalkingData: dogWalkingRepository
    private calculatePrice: CalculatePrice
    private formatHours: FormataHoras

    constructor(
        dogWalkingDataImplementation: dogWalkingRepository
    ) {
        this.dogWalkingData = dogWalkingDataImplementation
        this.idGenerator = new IdGenerator()
        this.calculatePrice = new CalculatePrice()
        this.formatHours = new FormataHoras()
    }

    create = async (input: CreateWalkInputDTO) => {
        const {
            date_schedule,
            duration,
            latitude,
            longitude,
            pets,
            date_start,
            date_end
        } = input

        if (!date_schedule || !duration || !latitude || !longitude || !pets || !date_start || !date_end) {
            throw new Error("Insira todos os campos!")
        }

        if (duration !== Duration.HORA && duration !== Duration.MEIAHORA) {
            throw new Error("Tempo de duração é inválido!")
        }

        if (date_start === date_end) {
            throw new Error("O horário de início não pode ser igual ao de término")
        }

        const horaInicio = this.formatHours.FormataStringHora(date_start)
        const horaTermino = this.formatHours.FormataStringHora(date_end)

        if (horaInicio > horaTermino) {
            throw new Error("O horário de início não pode ser maior que o horário de término")
        }

        if (date_end.length !== 8 || date_start.length !== 8) {
            throw new Error("Insira um horário válido")
        }

        const id: string = this.idGenerator.generate()
        const status = STATUS.INICIO
        const preco = this.calculatePrice.calculatePrice(pets, duration)

        const walk = new Walk(
            id,
            status,
            date_schedule,
            preco as number,
            duration,
            latitude,
            longitude,
            pets,
            date_start,
            date_end
        )

        await this.dogWalkingData.insert(walk)
    }

    startWalk = async (input: StartWalkInputDTO) => {
        const { id, date_start } = input

        if (!id || !date_start) {
            throw new Error("Insira todos os campos!")
        }

        if (date_start.length !== 8) {
            throw new Error("Insira um horário válido")
        }

        const walkId = await this.dogWalkingData.getWalkById(id)
        const status = walkId.status

        if (status !== STATUS.INICIO) {
            throw new Error("Esse passeio já foi iniciado ou já foi finalizado")
        }

        if (!walkId) {
            throw new Error("Esse passeio não existe!")
        }

        if (walkId) {
            await this.dogWalkingData.start_walk(date_start, id)
        }
    }

    finishWalk = async (input: FinishWalkInputDTO) => {
        const { id, date_end } = input

        if (!id || !date_end) {
            throw new Error("Insira todos os campos!")
        }

        if (date_end.length !== 8) {
            throw new Error("Insira um horário válido")
        }

        const walkId = await this.dogWalkingData.getWalkById(id)
        const status = walkId.status
        const duration = Number(walkId.duration)
        const horarioInicio = walkId.date_start

        const horarioInicioFormatado = this.formatHours.FormataStringHora(horarioInicio)
        const horarioTerminoFormatado = this.formatHours.FormataStringHora(date_end)

        if (status !== STATUS.ANDAMENTO) {
            throw new Error("Esse passeio ainda não foi iniciado!")
        }

        if (duration === 30 && (horarioTerminoFormatado - horarioInicioFormatado) < (30 * 60)) {
            throw new Error("Esse passeio não teve a duração mínima!")
        }

        if (duration === 60 && (horarioTerminoFormatado - horarioInicioFormatado) < (60 * 60)) {
            throw new Error("Esse passeio não teve a duração mínima!")
        }

        if (horarioTerminoFormatado < horarioInicioFormatado) {
            throw new Error("Não há como finalizar a corrida antes do horário de início!")
        }

        if (!walkId) {
            throw new Error("Esse passeio não existe!")
        }

        if (walkId) {
            await this.dogWalkingData.finish_walk(date_end, id)
        }
    }

    show = async (input: string) => {
        const walkId = input

        if (!walkId) {
            throw new Error("Insira todos os campos!")
        }

        const verifyWalkId = await this.dogWalkingData.getWalkById(walkId)

        if (!verifyWalkId) {
            throw new Error("Esse passeio não existe!")
        }

        const status = verifyWalkId.status

        if (status !== STATUS.FINALIZADO) {
            throw new Error("Esse passeio ainda não foi encerrado!")
        }

        const tempoInicio = verifyWalkId.date_start
        const tempoTermino = verifyWalkId.date_end

        const tempoInicioFormatado = this.formatHours.FormataStringHora(tempoInicio)
        const tempoTerminoFormatado = this.formatHours.FormataStringHora(tempoTermino)

        const diferenca = this.formatHours.diferenca(tempoTerminoFormatado, tempoInicioFormatado)
        const diferencaFormatada = this.formatHours.segundosParaHora(diferenca)

        return diferencaFormatada

    }

    index = async (page: number | any, walksPerPage: number | any) => {
        const pageInput = page
        const walksPerPageInput = walksPerPage

        if (pageInput === 0) {
            throw new Error("A página não pode ser igual a 0")
        }

        if ((pageInput || pageInput === "") && !walksPerPageInput) {
            throw new Error("Insira todos os campos")
        }

        if (!pageInput && (walksPerPageInput || walksPerPageInput === "")) {
            throw new Error("Insira todos os campos")
        }

        if (pageInput && walksPerPageInput) {
            const result = await this.dogWalkingData.getAllWalksPaged(pageInput, walksPerPageInput)
            return result
        } else {
            const result = await this.dogWalkingData.getAllWalks()
            return result
        }
    }
}