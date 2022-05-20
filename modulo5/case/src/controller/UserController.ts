// import { Request, Response } from "express";
// import { UserInputDTO, LoginInputDTO } from "../model/Athlete";

// import {BaseDatabase} from "../data/BaseDatabase";
// import { IdGenerator } from "../services/IdGenerator";
// import { HashManager } from "../services/HashManager";
// import { Authenticator } from "../services/Authenticator";
// import { RunnerDatabase } from "../data/RunnerDatabase";
// import { TokenGenerator } from "../services/TokenGenerator";

// const runnerBusiness = new RunnerBusiness(
//     new RunnerDatabase(),
//     new IdGenerator(),
//     new TokenGenerator(),
//     new HashManager(),
    
// )
// export class RunnerController {
//     async signup(req: Request, res: Response) {
//         try {

//             const input: UserInputDTO = {
//                 email: req.body.email,
//                 name: req.body.name,
//                 password: req.body.password,
//                 role: req.body.role
//             }


//             const token = await runnerBusiness.createUser(input);

//             res.status(200).send({message: "Usuário cadastrado!", token: token });

//         } catch (error: any) {
//             res.status(400).send({ error: error.message });
//         }

//         await BaseDatabase.destroyConnection();
//     }

//     async login(req: Request, res: Response) {

//         try {

//             const loginData: LoginInputDTO = {
//                 email: req.body.email,
//                 password: req.body.password
//             };

            
//             const token = await runnerBusiness.getUserByEmail(loginData);

//             res.status(200).send({ token });

//         } catch (error: any) {
//             res.status(400).send({ error: error.message });
//         }

//         await BaseDatabase.destroyConnection();
//     }

// }
// export default new UserController()