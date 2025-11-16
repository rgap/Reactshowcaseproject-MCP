import { useI18n } from "../../hooks/useI18n";
import { LanguagePicker } from "../LanguagePicker";
import styles from "./Header.module.css";

interface IHeader {
  showBadge?: boolean;
  badgeText?: string;
}

function Header({ showBadge = false, badgeText }: IHeader) {
  const { t } = useI18n();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__title}>{t("header-title")}</h1>
        {showBadge && badgeText && (
          <div className={styles.header__badge}>
            <p className={styles["header__badge-text"]}>{badgeText}</p>
          </div>
        )}
        <LanguagePicker />
      </div>
    </header>
  );
}

export { Header };

