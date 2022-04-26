import connection from "../conection";

const CreateUserAulaAltenticacao = "userAulaAltenticacao";

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