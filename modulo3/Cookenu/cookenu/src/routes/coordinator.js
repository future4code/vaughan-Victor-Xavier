// import {useNavigate} from "react-router-dom"



export const goToLogin = (navigate) => {
    navigate("/login")
}
export const goAddRecipesPage = (navigate) => {
    navigate("/adicionar-receita")
}
export const goRecipeDetailPage = (navigate) => {
    navigate(`/detalhe/:id`)
}
export const goRecipePage = (navigate) => {
    navigate("/")
}
export const goSignUpPage = (navigate) => {
    navigate("/cadastro")
}