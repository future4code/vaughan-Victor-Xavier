import {app} from "./app"
import { signUp } from "./endpoint/signup"

app.post("/user/signup",signUp)