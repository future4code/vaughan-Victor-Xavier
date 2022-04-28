import { app } from "../src/app/app"
import { signup } from "./endpoints/signUp"

app.post("/user/signup", signup)