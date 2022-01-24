import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="Pequeno-Container">
            <img src={ props.imagem } />
            <div>
                <h5>{ props.nome }</h5>
                <p>{ props.email }</p>
                <p>{ props.texto }</p>
            </div>
        </div>
    )
}

export default CardPequeno;