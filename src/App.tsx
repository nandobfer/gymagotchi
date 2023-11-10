import { ThemeProvider, Box } from "@mui/material"
import './App.css'
import { useMuiTheme } from "./hooks/useMuiTheme"
import { Routes } from "./Routes"
import { SnackbarProvider, Snackbar } from "burgos-snackbar"
import { BrowserRouter } from "react-router-dom"
import { ConfirmDialogProvider, ConfirmDialog } from "burgos-confirm"
import { TrainingProvider } from "./contexts/trainingsContext"
import { StopwatchProvider } from "./contexts/stopwatchContext"

const App: React.FC = () => {
    const theme = useMuiTheme()

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <SnackbarProvider>
                    <ConfirmDialogProvider>
                        <StopwatchProvider>
                            <TrainingProvider>
                                <Box sx={{ bgcolor: "background.default" }}>
                                    <ConfirmDialog />
                                    <Snackbar />
                                    <Routes />
                                </Box>
                            </TrainingProvider>
                        </StopwatchProvider>
                    </ConfirmDialogProvider>
                </SnackbarProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
