import React from "react";
import { LogoImage, ScreenContainer } from "../LoginPage/styled";
import logo from "../../assets/logo.png"
import { SignUpForm } from "./SingUpForm";


export const SignUpPage = () => {

    return (

        <ScreenContainer>
            <LogoImage src={logo} />
            <SignUpForm />


        </ScreenContainer>


    )

}