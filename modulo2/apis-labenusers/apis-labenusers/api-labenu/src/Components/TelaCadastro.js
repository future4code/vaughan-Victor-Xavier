import axios from "axios";
import React from "react";
import TelaListaUsuarios from "./TelaListaUsuarios";
import styled from "styled-components";



const Centralizar = styled.h2`
display: flex;
justify-content: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: oblique;
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

const Layout= styled.div`
display: grid;
grid-template-columns:    ;
justify-content: center;

`




export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ''
    }
    handleNome = (e) => {
        this.setState({ nome: e.target.value });
    };
    // get handleNome() {
    //     return this._handleNome;
    // }
    // set handleNome(value) {
    //     this._handleNome = value;
    // }
    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    };

    fazerCadastro = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body, {
            headers: {
                Authorization: 'victor-xavier-vaughan'
            }
        })
            .then((res) => {
                console.log(res)
                alert('Usuário cadastrado(a) com sucesso')
                this.setState({ nome: "", email: '' })
            })
            .catch((err) => {
                alert('Usuário ou email já cadastrados, \nou formato inválido ')
                console.log(err)
            })
    }


    render() {


        return (
            <div>
               
                <Layout>
                    <div></div>
                        
                        <Centralizar>Cadastro</Centralizar>
                        <BotaoTrocaPagina onClick={this.props.irParaLista} >Ir para lista de usuários</BotaoTrocaPagina>
                        <input
                            placeholder="Nome"
                            value={this.state.nome}
                            onChange={this.handleNome}
                            maxLength={15}
                        />
                        <input
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleEmail}
                        />
                        <BotaoTrocaPagina
                            onClick={this.fazerCadastro}
        
                        >Cadastrar</BotaoTrocaPagina>
                    
                </Layout>

            </div>
        )
    }


}