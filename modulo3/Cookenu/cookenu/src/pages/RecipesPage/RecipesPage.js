// import { Button } from "@material-ui/core";
import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";


export const RecipePage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>RecipePage</h1>

        </div>
    )

}