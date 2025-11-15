import { SquareValue } from "../../utils/tictactoe";
import { cx } from "../../utils/cx";
import styles from "./Square.module.css";

interface ISquare {
  value: SquareValue;
  onClick: () => void;
  isWinning?: boolean;
  disabled?: boolean;
}

function Square({ value, onClick, isWinning = false, disabled = false }: ISquare) {
  return (
    <button
      className={cx(
        styles.square,
        disabled && styles["square--disabled"]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {value && (
        <p
          className={cx(
            styles.square__text,
            isWinning && styles["square__text--winning"]
          )}
        >
          {value}
        </p>
      )}
    </button>
  );
}

export { Square };

