import React from "react";
import { InputsContainer, LogoImage, ScreenContainer } from "./styled";
import logo from "../../assets/logo.png"
import {  TextField } from "@material-ui/core";
import { useForm } from "../../hooks/useForm";
import  Button  from "@mui/material/Button";
export const LoginPage = () => {
    const [form, onchange, clear] = useForm({ email: "", password: "" })
    const onSubmitForm = () => {

    }
    return (

        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmit={onSubmitForm} >
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onchange}
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
                        onChange={onchange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin="dense"
                        required
                        type={"password"}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        
                    >Fazer login
                    </Button>


                </form>
            </InputsContainer>
        </ScreenContainer>


    )

}