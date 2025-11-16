import { cx } from "../../utils/cx";
import { INTENT, IntentType, SIZE, SizeType } from "./Button.constants";
import styles from "./Button.module.css";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: IntentType;
  size?: SizeType;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

function Button({
  intent = INTENT.PRIMARY,
  size = SIZE.MEDIUM,
  disabled = false,
  fullWidth = false,
  icon,
  children,
  className = "",
  ...props
}: IButton) {
  const buttonClasses = cx(
    styles.button,
    styles[`button--${intent}`],
    styles[`button--${size}`],
    disabled && styles["button--disabled"],
    fullWidth && styles["button--full-width"],
    className
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {icon && <span className={styles.button__icon}>{icon}</span>}
      {children && <span className={styles.button__text}>{children}</span>}
    </button>
  );
}

export { Button };
