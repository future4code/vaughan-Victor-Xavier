import express from "express";
import { RunnerCompetitionController } from "../Controller/RunnerController";

export const runnerRouter = express.Router();
const runnerController = new RunnerCompetitionController();

runnerRouter.post("/create", runnerController.createRunner)
runnerRouter.post("/finish", runnerController.finishRun)
runnerRouter.get("/ranking", runnerController.rankingRun)