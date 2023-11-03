import { createTheme } from "@mui/material"
import colors from "../style/colors"

export const useMuiTheme = () => {

    const THEME = createTheme({
        typography: {
            fontFamily: ["Fira Code"].join(","),
        },
        palette: {
            mode: "dark",

            primary: {
                main: colors.primary,
            },
            secondary: {
                main: colors.secondary,
            },
            text: {
                primary: colors.text.primary,
                secondary: colors.text.secondary,
            },
            background: {
                // default: colors.background
            }
        },
    })

    return THEME
}
