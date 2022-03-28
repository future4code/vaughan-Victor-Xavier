import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { imagemPerfil } from './Styled';
import { Amarelo } from './Styled';


export const Perfil = () => {
    const [perfil, setPerfil] = useState()
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const [bio, setBio] = useState('')
    const [idade, setIdade] = useState(0)

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-xavier/person`)
            .then((res) => {
                setPerfil(res.data.profile)
                setBio(res.data.profile.bio)
                setFoto(res.data.profile.photo)
                setIdade(res.data.profile.age)
                setNome(res.data.profile.name)
            })
            .catch((err) => {
                alert(err.menssage)
            })

    }
    const getMatch = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:victor-xavier/matches
`)
            .then((res) => {
                setPerfil(res.data.profile)
                setBio(res.data.profile.bio)
                setFoto(res.data.profile.photo)
                setIdade(res.data.profile.age)
                setNome(res.data.profile.name)

            })
            .catch((err)=>{
                alert(err.menssage)
            })
    }




    return (
        <div   >

            <div style={{ backgroundImage: `url(${foto})` }}>
                <br></br><br></br><br></br> <br></br> <br></br><br></br> <br></br> <br></br><br></br> <br></br><br></br><br></br><br></br><br></br>



            </div>



            <div>
                {nome},
                {idade}.<br></br>
                {bio},
            </div>
            <div>



            </div>
        </div>
    )
}

