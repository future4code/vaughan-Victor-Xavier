import { app } from "./app"
import login from "./endpoint/login"
import { signUp } from "./endpoint/signup"

app.post("/user/signup", signUp)
app.post("/user/login", login)   