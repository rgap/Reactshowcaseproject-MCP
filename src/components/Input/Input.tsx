import styles from "./Input.module.css";
import { cx } from "../../utils/cx";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

function Input({ error = false, className = "", disabled = false, ...props }: IInput) {
  const inputClasses = cx(
    styles.input,
    error && styles["input--error"],
    disabled && styles["input--disabled"],
    className
  );

  return (
    <div className={inputClasses}>
      <input className={styles.input__field} disabled={disabled} {...props} />
    </div>
  );
}

export { Input };

