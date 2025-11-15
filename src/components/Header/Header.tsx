import { useI18n } from "../../hooks/useI18n";
import { LanguagePicker } from "../LanguagePicker";
import styles from "./Header.module.css";

interface IHeader {
  badge?: string;
}

function Header({ badge }: IHeader) {
  const { t } = useI18n();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__title}>{t("app-title")}</h1>
        {badge && (
          <div className={styles.header__badge}>
            <p className={styles["header__badge-text"]}>{badge}</p>
          </div>
        )}
        <LanguagePicker />
      </div>
    </header>
  );
}

export { Header };

