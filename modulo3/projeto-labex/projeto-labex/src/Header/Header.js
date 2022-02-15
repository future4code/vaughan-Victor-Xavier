
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

 const HeaderAll = styled.header`
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




export const Header = () =>{
    const navigate = useNavigate()


    const goToAdminHomePage = ()=>{
        navigate("/Admin")
    }
    const goToApplicationFormPage = ()=>{
        navigate("/Application")
    }
    const goToCreateTripPage = ()=>{
        navigate("/Create-Trip")
    }
    const goToListTripsPage = ()=>{
        navigate("/List-Trip")
    }
    const goToLoginPage = ()=>{
        navigate("/Login")
    }
    return(
    <HeaderAll>
        
         <button onClick={goToAdminHomePage} >admin</button>
         <button onClick={goToApplicationFormPage} >Application</button>
         <button onClick={goToCreateTripPage} >create trip</button>
         <button onClick={goToListTripsPage} >list trip</button>
         <button onClick={goToLoginPage} >login</button>  
    </HeaderAll>
    )
 }