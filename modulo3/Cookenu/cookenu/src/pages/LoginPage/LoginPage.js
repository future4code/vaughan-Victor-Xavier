import React from "react";
import {  LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png"
import { useForm } from "../../hooks/useForm";
import Button from "@mui/material/Button";
import { LoginForm } from "./LoginForm";
import { goSignUpPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";






export const LoginPage = () => {
    const navigate= useNavigate()
    return (

        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm/>
               
           <SignUpButtonContainer>
                <Button
                onClick={()=> goSignUpPage(navigate) }
                    type="submit"
                    fullWidth
                    variant="text"
                    color={"primary"}
    
                >Não possui conta? Cadastre-se agora
                </Button>
           </SignUpButtonContainer>
        </ScreenContainer>


    )

}