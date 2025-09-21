import React, { useState } from 'react';
import Board from '../Board/Board';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const winner = calculateWinner(currentSquares);
 
  const isDraw = !winner && currentSquares.every(square => square !== null);

  const moves = history.map((_, move) => {
    const description = move ? `Voltar para movimento #${move}` : 'Início do jogo';
    return (
      <li key={move}>
        <Button onClick={() => jumpTo(move)} variant="outlined" sx={{ mb: 1 }}>
          {description}
        </Button>
      </li>
    );
  });

  return (
    <Box className = {styles.box}>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <Typography variant="h6" sx={{ mt: 2 }}>
        {winner
          ? `Ganhador: ${winner}`
          : isDraw
          ? 'Empate!'
          : `Próximo jogador: ${xIsNext ? 'X' : 'O'}`}
      </Typography>
      <ol className = {styles.element}>{moves}</ol>
    </Box>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
