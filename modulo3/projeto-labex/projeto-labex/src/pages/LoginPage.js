import axios from "axios"
import { useState } from "react"

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onSubmitLogin = () => {
        // console.log(email, password)


        const body = {
            email: email,
            password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-xavier/login", body)
            .then((res) => {
                console.log("deu certo",res.data)
    
            })
            .catch((err) => {
                console.log("deu errado", err.response)
            })
    }
    
    return (
        <div>
            <input
                placeholder="email"
                type="email"
                value={email}
                onChange={onChangeEmail}

            />
            <input
                placeholder="password"
                type="password"
                value={password}
                onChange={onChangePassword}

            />
            <button onClick={onSubmitLogin} >Submit</button>



        </div>)
}