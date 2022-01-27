import React from "react";

import axios, { Axios } from "axios";
import styled from "styled-components";



const BotaoRemover = styled.button`

	box-shadow:inset 0px 1px 0px 0px #f29c93;
	background:linear-gradient(to bottom, #e3311b 5%, #ce0100 100%);
	background-color:#e3311b;
	border-radius:6px;
	border:1px solid #d83526;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:10px;
	font-weight:bold;
	padding:center;
	text-decoration:none;
	text-shadow:0px 1px 0px #b23e35;
    width: 55px;

&:hover {
	background:linear-gradient(to bottom, #ce0100 5%, #fe1a00 100%);
	background-color:#ce0100;
}
&:active {
	position:relative;
	top:1px;
}


`

const Layout= styled.div  `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`


const Centralizar = styled.h2`
display: flex;
justify-content: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: oblique;
`

const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px ;
margin: 10px ;
width: 200px ;
display: flex;
justify-content: space-between;
border-radius: 10px;
`

const BotaoTrocaPagina = styled.button `
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
	background-color:#ededed;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#777777;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
    

   &:hover  {
     background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
	background-color:#dfdfdf;}

   &:active {
	position:relative;
	top:1px;
}`
    










export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: [],
    }


    componentDidMount() {
        
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, {
            headers: { Authorization: 'victor-xavier-vaughan' }
        })
            .then((res) => {
                this.setState({ usuarios: res.data })

            })
            .catch((err) => {
                alert('Erro, tente novamente')

            })
    }
    deletarUsuario = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.delete(url, {
            headers: { Authorization: 'victor-xavier-vaughan' }
        })



            .then((res) => {
                alert("usuario deletado com sucesso!")

                {

                }
                this.pegarUsuarios()

            })
            .catch((err) => {
                alert('erro, tente novamente')
            })




    }
    // janelaComfirmacao = () => {
    //     let text = `Press a button!\nEither OK or Cancel.`
    //    // eslint-disable-next-line no-restricted-globals
    //     if (confirm(text) == true) {
    //         text = this.deletarUsuario;
    //     } else {
    //         text = "voce cancelou o  'remover' ";
    //     }}

    


        render() {
            const listaUsuarios = this.state.usuarios.map((usuarios) => {
                return <CardUsuario key={usuarios.id} > {usuarios.name}
                    <BotaoRemover onClick={() => this.deletarUsuario(usuarios.id)} >Remover</BotaoRemover>
                </CardUsuario>


            })



            return (
                <Layout>
                   
                    <Centralizar>Lista de usuários</Centralizar>
                    <BotaoTrocaPagina onClick={this.props.irParaCadastro} >Ir para cadastros</BotaoTrocaPagina>
                    {this.state.usuarios.length>0? (listaUsuarios): <p>wait for it...</p>}
                    {listaUsuarios}

                    
                </Layout>
            )
        }

    }

