import react from "react";
import axios from "axios";
import React from "react";
import TelaPlaylist from "./Components/TelaPlaylist/TelaPlaylist";
import TelaListaUsuarios from "./Components/TelaListaUsuarios/TelaListaUsuarios";




class App extends React.Component {
  state = {
    telaAtual: "cadastro" 
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case 'cadastro':
        return <TelaListaUsuarios irParaPlaylist={this.irParaLista} />
      case 'playlist':
        return <TelaPlaylist irParaCadastro={this.irParaCadastro} />
      default:
        return <TelaListaUsuarios/>
    }

  }

  irParaCadastro = () => {
    this.setState({telaAtual:"cadastro"})

  }

  irParaLista = () => {
    this.setState({telaAtual:"playlist"})
  }

  render() {
    return (
      <div>
        {this.escolheTela()}

      </div>
    );
  }
}

export default App;
