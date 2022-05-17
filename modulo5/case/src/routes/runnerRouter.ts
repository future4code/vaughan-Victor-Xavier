import { RunnerController } from './../controller/RunnerController';
import express from "express";
import {  GetRunnerController } from "../controller/GetDetailsController";


export const bandRouter = express.Router();

const runnerController = new RunnerController();
const runnerController2 = new GetRunnerController();

bandRouter.post("/signup/runner", runnerController.signupRunner);
bandRouter.get("/details/:id", runnerController2.getBand);