import { Container, Sidebar } from "../Wireframe/Wireframe"
import styled from "styled-components"
import { Header } from "../Header/Header"
const Box1 = styled.div` 

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 100vh;
    width: 100vh;
  `

export const AdminHomePage = () =>{
    return(
        <div>
            <Header/>
            <Container>
    
    <Sidebar>asdasdas</Sidebar>
    <Box1>
<div>asdasdas</div>
<div>asdasdasd</div>
<div>asdasdasd</div>


    </Box1>
    <Sidebar>asdasd</Sidebar>
    
    
            </Container>  
        </div> 
        
        )
}