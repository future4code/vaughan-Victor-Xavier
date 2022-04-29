import { UserDatabase } from './../data/UserDatabase';
import { authenticationData } from './../types/types';
import { Request, Response } from "express"
import { Recipe } from '../model/createRecipesModel';


export const createRecipe = async (req: Request, res: Response): Promise<any> => {

    const { title, description }: { title: string, description: string } = req.body
    const token = req.headers.authorization as string
    const id = GenerateId()

    try {

        if (!token) {
            res.status(401).send("Para realizar essa operação é necessário ter token de autorização")
        }

        if (!title || !description) {
            res.status(422).send("Para realizar o cadastro de uma nova receita é necessário informar os seguintes campos: title, description.")
        }

        const authentication = new authenticationData()
        const verifyToken = authentication.getTokenData(token)

        const userDataBase = new UserDatabase()
        const user = await userDataBase.createUser(verifyToken.id)
        const userId = user.getId()

   

        const newRecipe = new Recipe(id, title, description)

        const recipeDatabase = new RecipeDatabase()
        recipeDatabase.registerRecipe(newRecipe)

        res.status(201).send({ message: "Receita cadastrada com sucesso!" })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}