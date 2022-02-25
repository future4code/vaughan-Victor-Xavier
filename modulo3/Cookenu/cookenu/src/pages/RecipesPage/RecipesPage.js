// import { Button } from "@material-ui/core";
import React from "react";
import { UseProtectedPage } from "../../hooks/useProtectedPage";

export const RecipePage = () => {
    UseProtectedPage()
    return (
        <div>
            <h1>RecipePage</h1>

        </div>
    )

}