import React from "react";

import { HeaderContainer } from "./HeaderStyled";



export const Header = (props) => {





    return (
        <HeaderContainer >
        
            <button onClick={props.irParaHome} >Home</button>
            <button onClick={props.irParaListaMatch} >match</button>


        </HeaderContainer>
    )
}



















