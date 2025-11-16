import { Button } from "../Button";
import { useI18n } from "../../hooks/useI18n";
import { LANGUAGE, LanguageType } from "./LanguagePicker.constants";
import { cx } from "../../utils/cx";
import styles from "./LanguagePicker.module.css";

function LanguagePicker() {
  const { language, setLanguage } = useI18n();

  const handleLanguageChange = (lang: LanguageType) => {
    setLanguage(lang);
  };

  return (
    <div className={styles["language-picker"]}>
      <Button
        type="button"
        onClick={() => handleLanguageChange(LANGUAGE.EN)}
        className={cx(
          styles["language-picker__button"],
          styles["language-picker__button--en"],
          language === LANGUAGE.EN && styles["language-picker__button--active"]
        )}
        aria-label="Switch to English"
      >
        <img
          src="/assets/en-flag.png"
          alt="English"
          className={styles["language-picker__flag"]}
        />
      </Button>
      <Button
        type="button"
        onClick={() => handleLanguageChange(LANGUAGE.ES)}
        className={cx(
          styles["language-picker__button"],
          styles["language-picker__button--es"],
          language === LANGUAGE.ES && styles["language-picker__button--active"]
        )}
        aria-label="Cambiar a Español"
      >
        <img
          src="/assets/es-flag.png"
          alt="Español"
          className={styles["language-picker__flag"]}
        />
      </Button>
    </div>
  );
}

export { LanguagePicker };

