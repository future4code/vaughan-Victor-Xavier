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
const Menu = styled.div`
 padding: 5px;


  `

export const AdminHomePage = () => {
    return (
        <div>
            <Header />
            <Container>

                <Sidebar>
                    <Menu>Tela</Menu>

                    <Menu>Home</Menu>

                </Sidebar>
                <Box1>
                    <div>asdasdas</div>
                    <div>asdasdasd</div>
                    <div>asdasdasd</div>


                </Box1>
                <Sidebar>
                <Menu>Contatos</Menu>


                </Sidebar>


            </Container>
        </div>

    )
}