import React, { useEffect } from "react";
import { Filter } from "../Filter/Filter";
import { Perfil } from "../Perfil/Perfil";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerPerfil = styled.div`
     width:45%;
    height: 600px;
    border:solid 1px;
    border-radius:20px;
   display:flex;
   flex-direction: column;
   align-content: space-between;
    justify-items: center;
`;
export const Home = () => {
   

    return (

        <ContainerPerfil>

            <Filter />
            <Perfil />
        </ContainerPerfil>
    )
}