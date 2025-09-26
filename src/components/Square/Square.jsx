import Button from '@mui/material/Button'
import styles from './styles.module.css'

export default function Square({ value, onSquareClick }) {
  return (
    <Button variant="outlined" onClick={onSquareClick} className = {styles.button}>
      {value}
    </Button>
  );
}