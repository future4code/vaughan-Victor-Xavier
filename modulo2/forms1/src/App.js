import React from 'react';
import './App.css';
import { Etapa2 } from './Etapa2/Etapa2';
import { Etapa3 } from './Etapa3/Etapa3';
import { Etapa4 } from './Etapa4/Etapa4';
import { Etapa1 } from './Etapa1/Etapa1';


export default class App extends React.Component {
  state = {
    etapa: 1
  }
  proximaEtapa = () => {
    this.setState({ etapa: 1 + this.state.etapa })

  }
  TrocaTela = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Etapa4 />

    }
  }

  render() {



    return (

      <div >
        {this.TrocaTela()}


        {this.state.etapa < 4 &&
          <button
            onClick={this.proximaEtapa}
          >Proxima etapa</button>}

      </div>

    );
  }
}

