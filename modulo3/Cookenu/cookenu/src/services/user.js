import axios from "axios";
import { BASE_URL } from "../constants/url"
import { goRecipePage } from "../routes/coordinator";






export const login = (body, clear,navigate) => {

    axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            console.log("aqui", res)
            clear()
            goRecipePage(navigate)
        })
        .catch((err) => {
            console.log(err.response)
            clear()
            alert("usuário ou senha não cadastrado")
        })
}