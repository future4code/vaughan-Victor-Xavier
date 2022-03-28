import react from "react";
import axios from "axios";
import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaListaUsuarios from "./Components/TelaListaUsuarios";




class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case 'cadastro':
        return <TelaCadastro irParaLista={this.irParaLista} />
      case 'lista':
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} />
      default:
        return <div>Erro pagina não encontrada</div>
    }

  }

  irParaCadastro = () => {
    this.setState({telaAtual:"cadastro"})

  }

  irParaLista = () => {
    this.setState({telaAtual:"lista"})
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
