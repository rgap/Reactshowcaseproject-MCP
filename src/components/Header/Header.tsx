import { useState } from "react";
import { LanguagePicker } from "../LanguagePicker";
import { LANGUAGE, type LanguageType } from "../LanguagePicker";
import styles from "./Header.module.css";

interface IHeader {
  onLanguageChange?: (language: LanguageType) => void;
}

function Header({ onLanguageChange }: IHeader) {
  const [activeLanguage, setActiveLanguage] = useState<LanguageType>(LANGUAGE.EN);

  const handleLanguageChange = (language: LanguageType) => {
    setActiveLanguage(language);
    onLanguageChange?.(language);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header__container"]}>
        <h1 className={styles["header__title"]}>React Showcase</h1>
        <div className={styles["header__language-group"]}>
          <LanguagePicker
            language={LANGUAGE.EN}
            flagUrl="http://localhost:3845/assets/300f0a14b9ee86f478ab610fa83ab85ef5068efd.png"
            isActive={activeLanguage === LANGUAGE.EN}
            onClick={() => handleLanguageChange(LANGUAGE.EN)}
          />
          <LanguagePicker
            language={LANGUAGE.ES}
            flagUrl="http://localhost:3845/assets/6fada58688f050034b3fac5d9467d0baa4e78cba.png"
            isActive={activeLanguage === LANGUAGE.ES}
            onClick={() => handleLanguageChange(LANGUAGE.ES)}
          />
        </div>
      </div>
    </header>
  );
}

export { Header };


