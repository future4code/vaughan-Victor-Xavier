import { Button, TextField } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import { InputsContainer, ScreenContainer } from "../LoginPage/styled"
import React from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { goToLogin } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"







export const SignUpForm = () => {
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })
    const navigate = useNavigate()
    const onSubmitForm = (event) => {
        event.preventDefault()
        goToLogin(navigate)

    }
    const signUp = () => {

        axios.post(`${BASE_URL}/user/signup`, form)
            .then((res) => {

                alert("cadastrado")
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
    return (

        <ScreenContainer>

            <InputsContainer>
                <form onSubmit={onSubmitForm} >
                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome completo"}
                        variant={"outlined"}
                        fullWidth
                        margin="dense"
                        required
                        autoFocus
                        type={"name"}


                    />

                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"Email"}
                        variant={"outlined"}
                        fullWidth
                        margin="dense"
                        required
                        type={"email"}

                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin="dense"
                        required
                        type={"password"}
                        autoComplete={"on"}

                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        onClick={signUp}

                    >Criar conta
                    </Button>


                </form>
            </InputsContainer>


        </ScreenContainer>


    )

}