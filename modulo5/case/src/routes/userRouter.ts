import express from "express";
import { RunnerController } from "../controller/RunnerController";


export const userRouter = express.Router();

const userController = new RunnerController();

userRouter.post("/signup", userController.signupRunner);
// userRouter.post("/login", userController.login);