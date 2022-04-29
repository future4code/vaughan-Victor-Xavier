import { app } from "../src/app/app"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signUp"

app.post("/user/signup", signup)
app.post("/user/login",login)