import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;


app.get("/ping", (req, res) => {
  res.send("Pong! 🏓")
})

//2
type Afazeres = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const listaDeAfazeres: Afazeres[] = [

  {
    "userId": 1,
    "id": 1,
    "title": "estudar",
    "completed": true
  },
  {
    "userId": 2,
    "id": 2,
    "title": "caminhar",
    "completed": true
  },
  {
    "userId": 3,
    "id": 3,
    "title": "sofrer",
    "completed": true
  },
  {
    "userId": 4,
    "id": 4,
    "title": "limpar a casa",
    "completed": false
  },]



app.get("/afazeres/:completed", (req, res) => {
  //   const afazeresCompletos = listaDeAfazeres;
  //   const afazeresLista = afazeresCompletos.filter((a) => {
  //     return a.completed === true
  //   })
  //   res.status(200).send(afazeresLista)
  // 

  if (req.params.completed === "true" || req.params.completed === "false") {
    let completo: boolean
    if (req.params.completed === "true") {
      completo = true
    }
    else if (req.params.completed === "false") {
      completo = false
    }

    const afazeresCompletos = listaDeAfazeres;
    const afazeresLista = afazeresCompletos.filter((a) => {
      return a.completed === completo
    })
    res.status(200).send(afazeresLista)
  }



})
// app.get("/afazeres-completed-false", (req, res) => {
//   const afazeresCompletos = listaDeAfazeres;
//   const afazeresLista = afazeresCompletos.filter((a) => {
//     return a.completed === false
//   })
//   res.status(200).send(afazeresLista)
// })




//5
app.post("/criar-tarefa/:idUsuario", (req, res) => {
  const nomeDaTarefa = req.body.title
  const completo = req.body.completed

  const idUsuario = Number(req.headers.authorization)

  listaDeAfazeres.push({
    title: nomeDaTarefa,
    id: Number(Date.now()),
    completed: completo,
    userId: idUsuario,
  })
  res.status(200).send({ listaDeAfazeres })
})
