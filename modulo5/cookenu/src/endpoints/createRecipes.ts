import { Authenticator } from './../services/token';
import { authenticationData } from './../types/types';
import { UserDatabase } from './../data/UserDataBase';
import { HashManager } from './../services/generatehash';
import { Request, Response } from "express"
import { Recipe } from '../model/createRecipesModel';
import { IdGeneretor } from '../services/idGeneretor';


export const createRecipe = async (req: Request, res: Response) => {
    
    
    try {
        const idGeneretor = new IdGeneretor();
        const id = idGeneretor.generateId()
        const token = req.headers.authorization as string
        const {title, description}=req.body
        if (!token) {
            res.status(401).send("Para realizar essa operação é necessário ter token de autorização")
        }

        if (!title || !description) {
            res.status(422).send("Para realizar o cadastro de uma nova receita é necessário informar os seguintes campos: title, description.")
        }

        const authentication = new Authenticator()
        const verifyToken = authentication.getData(token)

        const recipeDataBase = new UserDatabase()

        const newRecipe = new Recipe(id,title,description)
             await recipeDataBase.createRecipe(newRecipe)

   

        
            


        res.status(201).send({ message: "Receita cadastrada com sucesso!" })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}