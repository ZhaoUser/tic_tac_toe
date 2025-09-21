
import Button from '@mui/material/Button';

export default function Square({ value, onSquareClick }) {
  return (
    <Button
      variant="outlined"
      onClick={onSquareClick}
      sx={{
        minWidth: 64,
        minHeight: 64,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        mx: 0.5,
        my: 0.5,
      }}
    >
      {value}
    </Button>
  );
}