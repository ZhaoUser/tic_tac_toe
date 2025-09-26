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
      <div className="theme-toggle-btn">
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </div>

      {/* Jogo */}
      <Container maxWidth="sm" className="container-custom">
        <Typography
          variant="h3"
          gutterBottom
          className="gradient-title"
        >
          Tic Tac Toe
        </Typography>
        <div className="game-wrapper">
          <Game />
        </div>
      </Container>

      {/* Rodapé */}
        <Typography variant = "body2" className = "footer">
        Projeto TicTacToe
      </Typography>

    </ThemeProvider>
  );
}

