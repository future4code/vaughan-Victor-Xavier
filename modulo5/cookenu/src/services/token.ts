import { authenticationData } from './../types/types';
import * as jwt from "jsonwebtoken";


export class Authenticator{
    generateToken=(payload:authenticationData)=>{
        return jwt.sign(
            payload,
        `   ${ process.env.JWT_KEY}` as string,
            {
                expiresIn:"20min"
            }
        )
    }
    getData = (token: string): authenticationData => {
        console.log(token)
        console.log(process.env.JWT_SECRET_KEY)
        const payload = jwt.verify(token,`${process.env.JWT_SECRET_KEY}`as string) as any;
        console.log("2")
        const result = {
            
            id: payload.id,
            role: payload.role
        };
        console.log("3")
        return result;
    };

}
