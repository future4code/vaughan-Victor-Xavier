import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header";
import { AddRecipesPage } from "../pages/AddRecipesPage/AddRecipesPage";
import { ErrorPage } from "../pages/Error/Error";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RecipeDetailPage } from "../pages/RecipeDetailPage/RecipeDetailPage";
import { RecipePage } from "../pages/RecipesPage/RecipesPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";


export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/adicionar-receita" element={<AddRecipesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/detalhe/:id" element={<RecipeDetailPage />} />
                <Route path="/" element={<RecipePage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route element={<ErrorPage />} />




            </Routes>



        </BrowserRouter>

    )
}