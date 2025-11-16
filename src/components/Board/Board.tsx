import { Board as BoardType } from "../../utils/tictactoe";
import { Square } from "../Square";
import styles from "./Board.module.css";

interface IBoard {
  squares: BoardType;
  winningLine: number[] | null;
  onSquareClick: (index: number) => void;
  disabled?: boolean;
}

function Board({ squares, winningLine, onSquareClick, disabled = false }: IBoard) {
  return (
    <div className={styles.board}>
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onSquareClick(index)}
          isWinning={winningLine?.includes(index) || false}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export { Board };

