import styled from 'styled-components';
import '../App.css';
export const Header = styled.header`
  display: flex;
  border: solid 1px black;
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border: solid 1px black;
    flex-direction: row;
    align-content: stretch;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const Box1 = styled.div` 

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 100vh;
    width: 100vh;
  `
export const Container = styled.div`
  display: grid ;
  grid-template-columns: 1fr 3fr 1fr ;
  /* grid-template-rows:  repeat(4, 1fr); */
  align-items: center;
  justify-items: center;
  grid-auto-rows: 500px;
  grid-auto-rows: minmax(400px, auto);
  grid-column-gap: 10px;
  width: 100%;
  height: 100%;
  padding: 7px;
  /* display: grid;
    grid-template-columns: 1fr 3fr 1fr ;
    grid-template-rows:  repeat(4, 1fr) ;
    height: 100vh; */
 
      
`;
export const Sidebar = styled.div`
  display: flex ;
  flex-wrap: wrap;
  border: solid; 
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 7px;
  margin: 10px;
`;



export const ContainerPrincipal = () => {
    return (
        <div>
            <Header>
                <div>LabeX</div>
                <p  >MENU</p>
            </Header>

            <Container>
                <Sidebar class="item item-1"  >Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Sidebar>
                <Box1>
                    CORPO
                    <div>asdasdasd</div>
                    <div>dasdasd</div>
                </Box1>

                <Sidebar> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. In pellentesque massa placerat duis ultricies. Leo a diam sollicitudin tempor id eu. Arcu cursus euismod quis viverra. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Interdum velit euismod in pellentesque massa. Integer vitae justo eget magna fermentum. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Montes nascetur ridiculus mus mauris. Posuere lorem ipsum dolor sit amet consectetur.
                    Donec adipiscing tristique risus nec feugiat in fermentum posuere urna.
                    Pretium lectus quam id leo.</Sidebar>
            </Container>


        </div>
    )
}