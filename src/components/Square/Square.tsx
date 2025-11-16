import styles from "./Square.module.css";
import { cx } from "../../utils/cx";
import type { Square as SquareValue } from "../../utils/tictactoe";

interface ISquare {
  value: SquareValue;
  onSquareClick: () => void;
  isWinner?: boolean;
  disabled?: boolean;
}

function Square({ value, onSquareClick, isWinner = false, disabled = false }: ISquare) {
  const squareClasses = cx(
    styles.square,
    isWinner && styles["square--winner"],
    disabled && styles["square--disabled"]
  );

  return (
    <button className={squareClasses} onClick={onSquareClick} disabled={disabled}>
      {value}
    </button>
  );
}

export { Square };

