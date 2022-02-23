import { createTheme } from "@material-ui/core/";
import { primaryColor, neutralColor } from "./colors"


export const theme = createTheme({

    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white"
        },
        text: {
            primary: neutralColor
        }
    }



})