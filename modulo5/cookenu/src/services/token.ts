import { authenticationData } from './../types/types';
import * as jwt from "jsonwebtoken";


export class Authenticator{
    generateToken=(payload:authenticationData)=>{
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn:"5h"
            }
        )
    }
    getData = (token: string): authenticationData => {
        const payload = jwt.verify(token,`${process.env.JWT_SECRET_KEY}`as string) as any;
        const result = {
            id: payload.id,
            role: payload.role
        };
        return result;
    };

}
