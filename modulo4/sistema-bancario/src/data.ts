

type User = {
    name: String,
    cpf:String,
    date: Date,
    saldo: Number,
    gastos: any,
   
}
export type Extrato = {
    valor: number,
    data: string | number | Date,
    descricao: string
}

export const users:User[] = [
    {
        name: "João",
        cpf: "111.111.111-11",
        date: new Date(15/4/2004),
        saldo: 0,
        gastos:[{}],
       
    },
    {
        name: "Poliana",
        cpf: "222.222.222-22",
        date: new Date(30/8/2005),
        saldo: 0,
        gastos:[{}],
       
    }
]