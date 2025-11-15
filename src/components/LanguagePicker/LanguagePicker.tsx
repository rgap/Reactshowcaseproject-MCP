import { LANGUAGE, type LanguageType } from "./LanguagePicker.constants";
import styles from "./LanguagePicker.module.css";

interface ILanguagePicker {
  language: LanguageType;
  flagUrl: string;
  isActive?: boolean;
  onClick?: () => void;
}

function LanguagePicker({ language, flagUrl, isActive = false, onClick }: ILanguagePicker) {
  const pickerClasses = [
    styles["language-picker"],
    isActive && styles["language-picker--active"]
  ].filter(Boolean).join(" ");

  return (
    <button
      className={pickerClasses}
      onClick={onClick}
      aria-label={`Switch to ${language.toUpperCase()}`}
      type="button"
    >
      <img 
        src={flagUrl} 
        alt={`${language.toUpperCase()} flag`}
        className={styles["language-picker__flag"]}
      />
    </button>
  );
}

export { LanguagePicker };


