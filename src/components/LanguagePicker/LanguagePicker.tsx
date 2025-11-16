import { useContext } from "react";
import { I18nContext } from "../../contexts";
import styles from "./LanguagePicker.module.css";
import { cx } from "../../utils/cx";

import enFlag from "../../assets/en-flag.svg";
import esFlag from "../../assets/es-flag.svg";

function LanguagePicker() {
  const { language, setLanguage } = useContext(I18nContext);

  return (
    <div className={styles["language-picker"]}>
      <button
        className={cx(
          styles["language-picker__button"],
          language === "en" && styles["language-picker__button--active"]
        )}
        onClick={() => setLanguage("en")}
        aria-label="English"
      >
        <img src={enFlag} alt="English" className={styles["language-picker__flag"]} />
      </button>
      <button
        className={cx(
          styles["language-picker__button"],
          language === "es" && styles["language-picker__button--active"]
        )}
        onClick={() => setLanguage("es")}
        aria-label="Español"
      >
        <img src={esFlag} alt="Español" className={styles["language-picker__flag"]} />
      </button>
    </div>
  );
}

export { LanguagePicker };

