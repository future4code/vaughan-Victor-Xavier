import express, { Request, Response } from "express";
import { produtosArray } from "./data";
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

app.get("/test", (req, res) => {
  res.status(200).send("funcionando")

})

// ====================== ADICIONAR PRODUTO ======================//
app.post("/novo-produto", (req: Request, res: Response) => {
  const { name, price } = req.body
  try {

    if (!name || !price) {
      throw new Error("Campos de nome ou preço faltando");
    }

    if (name !== String) {
      throw new Error("O nome do produto não é uma string");
    }

    if (price !== Number) {
      throw new Error("O preço do produto não é um Number");
    }

    if (price < 0) {
      throw new Error("O preço do produto não pode ser menor que ZERO");

    }

    produtosArray.push({

      id: Date.now().toString(),
      name: req.body.name,
      price: req.body.price
    })
    res.status(200).send(produtosArray)

  }
  catch (error: any) {
    switch (error.message) {
      case "Campos de nome ou preço faltando":
        return res.status(400).send(error.message)

      case "O nome do produto não é uma string":
        return res.status(401).send(error.message)

      case "O preço do produto não é um number":
        return res.status(400).send(error.message)

      case "O preço do produto não pode ser menor que ZERO":
        return res.status(400).send(error.message)

      default:
        res.status(500)
        break;
    }

  }
})

app.get("/lista-de-produtos", (req, res) => {


  res.status(200).send(produtosArray)

})

//===================== EDITAR PREÇO ===========================//
app.put("/edit-price/:id", (req, res) => {
  const id = req.params.id
  const { price } = req.body
  try {
    if (!price) {
      throw new Error("Preço não informado");
    }
    if (price !== Number) {
      throw new Error("Preço não é um Number");
    }
    if (price <= 0) {
      throw new Error("Preço não pode ser menor ou igual a ZERO");
    }
    if (!id ) {
      throw new Error("Produto não encontrado");
    }






    const editarPreco = produtosArray.filter((p) => {
      return p.id === id
    })[0]

    editarPreco.price = req.body.price
    res.status(200).send(editarPreco)

  } catch (error: any) {
    switch (error.message) {
      case "Preço não informado":
        res.status(400).send(error.message)
        break;

      case "Preço não é um Number":
        res.status(400).send(error.message)
        break;

      case "Preço não pode ser menor ou igual a ZERO":
        res.status(400).send(error.message)
        break;

      default:
        break;
    }
  }


})

app.delete("/delete-produto/:id", (req, res) => {
  const id = req.params.id

  for (let i = 0; i < produtosArray.length; i++) {
    if (produtosArray[i].id === id) {
      produtosArray.splice(i, 1)
    }
  }
  res.status(200).send(produtosArray)
})