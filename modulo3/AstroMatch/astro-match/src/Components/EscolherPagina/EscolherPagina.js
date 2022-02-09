import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';


export function Perfil() {
    const [perfil, setPerfil] = useState()

    const getProfileToChoose = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-xavier/person")
            .then((res) => {
                setPerfil(res.data.profile)
            })
            .catch((err) => {
                return alert("Erro ao carregar o perfil")
            })
    }




}