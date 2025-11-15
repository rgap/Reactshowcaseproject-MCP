import { Board as BoardType } from "../../utils/tictactoe";
import { Square } from "../Square";
import styles from "./Board.module.css";

interface IBoard {
  squares: BoardType;
  onClick: (i: number) => void;
  winningLine?: number[];
  disabled?: boolean;
}

function Board({ squares, onClick, winningLine = [], disabled = false }: IBoard) {
  return (
    <div className={styles.board}>
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          isWinning={winningLine.includes(i)}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export { Board };

