import connection from "../data/BaseDatabase";

const CreateUserAulaAltenticacao = "userLabebook";

export const createUser = async (
   id: string, 
   email: string, 
   password: string) => {
 await connection
   .insert({
     id,
     email,
     password,
   })
   .into(CreateUserAulaAltenticacao);
};