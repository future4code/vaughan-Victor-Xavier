import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Home } from './Components/Home/Home';
import { ListaDeMatch } from './Components/ListaDeMatchs/ListaDeMatch';
import { Header } from './Components/Header/Header';




function App() {
  const [home, setHome] = useState('')
  // const [listaMatch, setListaMatch] = useState('')


  const irParaListaMatch = () => {
    setHome('matchs')
  }
  const irParaHome = () => {
    setHome('home')
  }
  const selecionarPagina = () => {
    switch (home) {
      case "home":
        return <Home irParaListaMatch={irParaListaMatch} />
      case "matchs":
        return <ListaDeMatch irParaHome={irParaHome} />
      default:
        return <Home irParaHome={irParaHome} />
    }
  }







  return (

    <div>
      <Header  irParaHome={irParaHome} irParaListaMatch={irParaListaMatch}  />
      
      {selecionarPagina()}

    </div>
  )
}

export default App;
