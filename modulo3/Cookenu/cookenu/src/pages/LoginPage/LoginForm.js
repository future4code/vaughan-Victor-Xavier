import React from "react";
import { InputsContainer, ScreenContainer, } from "./styled";
import { TextField } from "@material-ui/core";
import { useForm } from "../../hooks/useForm";
import Button from "@mui/material/Button";
import axios from "axios";
import { BASE_URL } from "../../constants/url"
import { useNavigate } from "react-router-dom";
import { goRecipePage } from "../../routes/coordinator";



export const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    const onSubmitForm = (event) => {
        event.preventDefault()
        login()
        goRecipePage(navigate)
      
    }

    const login = () => {

        axios.post(`${BASE_URL}/user/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                // console.log("aqui", res.data)
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
                        // onClick={() => goRecipePage(navigate)}
                    >Fazer login
                    </Button>


                </form>
            </InputsContainer>


        </ScreenContainer>


    )

}