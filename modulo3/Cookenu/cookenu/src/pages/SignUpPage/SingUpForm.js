import { Button, TextField } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import { InputsContainer, ScreenContainer } from "../LoginPage/styled"
import React from "react"







export const SignUpForm = () => {
    const [form, onchange, clear] = useForm({ email: "", password: "" })
    const onSubmitForm = (event) => {
        event.preventDefaut()
    }
    return (

        <ScreenContainer>

            <InputsContainer>
                <form onSubmit={onSubmitForm} >
                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onchange}
                        label={"Nome completo"}
                        variant={"outlined"}
                        fullWidth
                        margin="dense"
                        required
                        autoFocus



                    />

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

                    >Criar conta
                    </Button>


                </form>
            </InputsContainer>


        </ScreenContainer>


    )

}