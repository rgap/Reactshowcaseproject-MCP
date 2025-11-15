import { useI18n } from "../../hooks/useI18n";
import { LANGUAGE } from "./LanguagePicker.constants";
import { cx } from "../../utils/cx";
import styles from "./LanguagePicker.module.css";

function LanguagePicker() {
  const { language, setLanguage } = useI18n();

  return (
    <div className={styles["language-picker"]}>
      <button
        className={cx(
          styles["language-picker__button"],
          language === LANGUAGE.EN && styles["language-picker__button--active"]
        )}
        onClick={() => setLanguage(LANGUAGE.EN)}
        aria-label="Switch to English"
      >
        <img
          src="/assets/en-flag.png"
          alt="English"
          className={styles["language-picker__flag"]}
        />
      </button>
      <button
        className={cx(
          styles["language-picker__button"],
          language === LANGUAGE.ES && styles["language-picker__button--active"]
        )}
        onClick={() => setLanguage(LANGUAGE.ES)}
        aria-label="Cambiar a Español"
      >
        <img
          src="/assets/es-flag.png"
          alt="Español"
          className={styles["language-picker__flag"]}
        />
      </button>
    </div>
  );
}

export { LanguagePicker };

