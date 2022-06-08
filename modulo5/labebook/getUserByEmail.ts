import connection from "./src/data/BaseDatabase";



export const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("userAulaAltenticacao")
      .where({ email });
 
    return result[0];
   }
 