

type User = {
    name: String,
    cpf:String,
    date: string,
    balance: Number,
    statement: any,
    bill:any
}

export const users:User[] = [
    {
        name: "João",
        cpf: "111.111.111-11",
        date: "15/04/2004",
        balance: 0,
        statement:[{}],
        bill:[{}]
    },
    {
        name: "Poliana",
        cpf: "222.222.222-22",
        date: "30/08/2005",
        balance: 0,
        statement:[{}],
        bill:[{}]
    }
]