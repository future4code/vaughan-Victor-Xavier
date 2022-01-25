import React from 'react';
import styled from 'styled-components';
import './App.css';
import axios from 'axios'


class App extends React.Component() {
  state = {
    userList: [],
    nameInput: "",
    emailInput: ""


  }
  onchangeInputName = (event) => {
    this.setState({ nameInput: event.target.value })
  }
  onchangeInputEmail = (event) => {
    this.setState({ emailImput: event.target.value })
  }

  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    }

    axios.post(url, body, { headers: { Authorization: "victor-xavier-vaughan" } })

      .then((response) => {
        console.log(response.data)
        this.setState({ nameInput: "", emailImput: "" });
        alert("Usuário cadastrado")
          .catch((error) => {
            console.log(error.data)
            alert("Erro no cadastro")

          })
      })


  }

  render() {

    const createUserList= this.state.createUser.map((user)=>{
      return(
        <div>
         
          <p>{user.name}</p>
        </div>
      )
    })


    return (


      <div>
        <input
          placeholder='Nome'
          value={this.state.nameInput}
          onChange={this.onchangeInputName}
        />
        <input
          placeholder='Email'
          value={this.state.emailInput}
          onChange={this.onchangeInputEmail}
        />
        <button onClick={this.createUserList}>Enviar</button>

      </div>
    )
  }

}

export default App;
