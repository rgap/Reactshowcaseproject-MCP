import { cx } from "../../utils/cx";
import styles from "./Input.module.css";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  disabled?: boolean;
}

function Input({
  error,
  disabled = false,
  className = "",
  ...props
}: IInput) {
  const hasError = Boolean(error);

  return (
    <div className={cx(styles.input, className)}>
      <input
        className={cx(
          styles.input__field,
          hasError && styles["input__field--error"],
          disabled && styles["input__field--disabled"]
        )}
        disabled={disabled}
        {...props}
      />
      {error && <p className={styles.input__error}>{error}</p>}
    </div>
  );
}

export { Input };
