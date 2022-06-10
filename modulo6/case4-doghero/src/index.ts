import { app } from "./data/app";
import { dogWalkingRouter } from "./Routes/dogWalkerRouter";

app.use("/doghero", dogWalkingRouter);