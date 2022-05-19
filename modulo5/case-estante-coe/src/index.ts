import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { runnerRouter } from "./Routes/runnerRouter";
import { dartRouter } from "./Routes/dartRouter";
import cors from "cors"

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())

app.use("/runner", runnerRouter);
app.use("/dart", dartRouter);

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});