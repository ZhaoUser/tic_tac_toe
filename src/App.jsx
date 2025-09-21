import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Game from "./components/Game/Game";

export default function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: { mode },
  });

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Botão de alternar tema no canto */}
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </div>

      {/* Jogo */}
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography 
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(45deg, #00ff7bff, #ffff00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
          Tic Tac Toe
        </Typography>
        <Game />
      </Container>

      {/* Rodapé */}
      <Typography
        variant="body2"
        align="center"
        sx={{
          position: "fixed",
          bottom: 10,
          left: 0,
          right: 0,
          color: "text.secondary",
        }}
      >
        Projeto TicTacToe criado por Sammy Zhao
      </Typography>
    </ThemeProvider>
  );
}

