
// dentro do index.ts, fazer importações e ativar o Express e Cors.
import dotenv from "dotenv"
import express, {Express} from 'express'
import cors from 'cors'


dotenv.config()
const app: Express = express();

app.use(express.json());
app.use(cors());
 
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() ;
        console.log(`Server is running in http://localhost:3003`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

// 1)
//a) Cria um objeto(instancia) dentro da classe. Acessamos através do this.
//b)  1 vez
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    public getUser(): any{
        return [this.age, this.cpf, this.name, this.transactions]
    }
    public getName(): string{
        return this.name
    }
    public addTransaction(transaction: Transaction){
        this.transactions.push(transaction)
    }
    public setAge(newAge: number) : any{
        return this.age = newAge
    }
    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}

let usuario: UserAccount = new UserAccount("111", "User1", 27)
usuario.setAge(28)
//c) criando um metodo publico para acessar as propriedades da classe especifica

// 2) 

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    public getTransaction(): string{
        return this.description, this.value, this.date
    }
    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value;
        this.date = date;
    }
}

let add: Transaction = new Transaction("pagamento", 227, "10/04/2022")
usuario.addTransaction(add)


// 3)

class Bank {
    private accounts: UserAccount[];

    public getNames(): string[] {
        return this.accounts.map((user) => {
            return user.getName()
        })
    }


    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

  }

  console.log(usuario.getUser()) 