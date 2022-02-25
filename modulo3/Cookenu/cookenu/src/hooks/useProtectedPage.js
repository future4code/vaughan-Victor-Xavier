import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLogin } from "../routes/coordinator";

export const useProtectedPage = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            goToLogin(navigate)
        }
    }, [navigate])
}