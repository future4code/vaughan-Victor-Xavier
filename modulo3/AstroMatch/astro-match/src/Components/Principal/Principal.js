import react from "react";
import { useEffect, useState } from "react";


export function Principal() {
    const [trocaPagina, setTrocaPagina] = useState()
    const [listaDeMatch, setListaDeMatch] = useState(undefined)
    const [perfilSelecionado, setPerfilSelecionado] = useState(initialState)
const [secao, setSecao] = useState("Home")
}

const trocaPagina = (event)=>{
setSecao(event.currentTarget.getAtribute("value"))
}



