import { useI18n } from "../../hooks/useI18n";
import { LanguagePicker } from "../LanguagePicker";
import styles from "./Header.module.css";

function Header() {
  const { t } = useI18n();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__title}>{t("app-title")}</h1>
        <LanguagePicker />
      </div>
    </header>
  );
}

export { Header };

