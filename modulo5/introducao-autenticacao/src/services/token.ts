import { authenticationData } from './../types/types';
import * as jwt from "jsonwebtoken";


export class Authenticator{
    GenerateToken=(payload:authenticationData)=>{
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn:"5h"
            }
        )
    }
} 