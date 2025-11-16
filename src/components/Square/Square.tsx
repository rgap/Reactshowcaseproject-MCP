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
  const handleClick = () => {
    if (!disabled && !value) {
      onClick();
    }
  };

  return (
    <div
      className={cx(
        styles.square,
        (disabled || value) && styles["square--disabled"]
      )}
      onClick={handleClick}
    >
      {value && (
        <p
          className={cx(
            styles.square__value,
            isWinning && styles["square__value--winning"]
          )}
        >
          {value}
        </p>
      )}
    </div>
  );
}

export { Square };

