import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import { SecaoComentario } from './components/SecaoComentario/SecaoComentario';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`



class App extends React.Component {

  state = {
    post: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'zeca',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      }, {
        nomeUsuario: 'carlos',
        fotoUsuario: 'https://picsum.photos/50/20',
        fotoPost: 'https://picsum.photos/200/152'
      }

    ],

    inputNome: "",
    inputFotUsuario: ""    ,
    inputFotoPost: "",
  }

  //associa o nome ao evento

  guardaUsuario = (event) => {
    this.setState({ inputNome: event.target.value })
  }
  guardaFotoUsuario = (event) => {
    this.setState({ inputFotUsuario: event.target.value })
  }
  guardaFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  }
  adicionarPost = (event) => {
    const novoPost = {
      nomeUsuario: this.state.inputNome,
      fotoUsuario: this.state.inputFotUsuario,
      fotoPost: this.state.inputFotoPost
    }
    const copia = [...this.state.post, novoPost]
    this.setState({ post: copia })
  }
  
  //associa o nome ao evento

  render() {

    const listaDePost = this.state.post.map((post) => {

      return (


        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />



      );
    });
    return (
      <MainContainer>
        <input onChange={this.guardaUsuario} value={this.state.inputNome} placeholder='Nome' />
        <input onChange={this.guardaFotoUsuario} value={this.state.inputFotUsuario} placeholder='Foto' />
        <input onChange={this.guardaFotoPost} value={this.state.inputFotoPost} placeholder='Post' />
        <button onClick={this.adicionarPost} >Postar</button>
        {listaDePost}
      </MainContainer>
    )
  }
}
export default App;
