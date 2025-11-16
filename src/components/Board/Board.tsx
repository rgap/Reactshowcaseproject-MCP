import { Square } from "../Square";
import styles from "./Board.module.css";
import type { Board as BoardType } from "../../utils/tictactoe";

interface IBoard {
  squares: BoardType;
  onPlay: (squares: BoardType) => void;
  xIsNext: boolean;
  winningLine: number[];
  disabled: boolean;
}

function Board({ squares, onPlay, xIsNext, winningLine, disabled }: IBoard) {
  function handleClick(i: number) {
    if (squares[i] || disabled) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
    <div className={styles.board}>
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onSquareClick={() => handleClick(i)}
          isWinner={winningLine.includes(i)}
          disabled={disabled || square !== null}
        />
      ))}
    </div>
  );
}

export { Board };

