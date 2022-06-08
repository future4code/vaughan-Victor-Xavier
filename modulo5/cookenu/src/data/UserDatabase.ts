import { Recipe } from './../model/createRecipesModel';
import { CreateUserModel } from './../model/CreateUserModel';

import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase{

    public async createUser(user: CreateUserModel){
        try {
            await BaseDatabase.connection('userCookenu').insert({
                id: user.getId(),
                name: user.getname(),
                email: user.getemail(),
                password: user.getpassword(),
                role:user.getrole()
            })
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
    public async getUser(): Promise<BaseDatabase[]>{
        try {
            const user = await BaseDatabase.connection('User')
            .select(
                "id",
                "name",
                "email"
                )
            return user
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }



    public async createRecipe(recipe: Recipe){
        try {
            await BaseDatabase.connection('recipesCookenu').insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription()
               
            })
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }





    public async findUserByEmail(email: string): Promise<CreateUserModel>{
        try {
            const user = await BaseDatabase.connection('userCookenu').select('*').where({email})
            return user[0] && CreateUserModel.toUserModel(user[0]);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }



    }






