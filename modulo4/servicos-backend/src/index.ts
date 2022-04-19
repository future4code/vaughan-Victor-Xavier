import { createUser } from './endpoints/createUser';
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


app.post("/users", createUser)