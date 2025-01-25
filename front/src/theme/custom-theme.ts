import { createTheme, ThemeOptions } from "@mui/material";

export const customTheme: ThemeOptions = createTheme({
    palette: {
        mode: "light",
        primary: {
            light: "rgba(255, 36, 36, 0.8)",
            main: "rgba(255, 36, 36,.65)",
            dark: "rgba(255, 36, 36,.28)"
        },
        background: {
            paper: "#f5f5f5",
            default: "#fff"
        }
    }
});