import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { ComponentCard } from "../../components/ComponentCard";
import { useI18n } from "../../hooks/useI18n";
import { PROJECTS } from "./HomePage.constants";
import styles from "./HomePage.module.css";

function HomePage() {
  const { t } = useI18n();
  const navigate = useNavigate();

  return (
    <div className={styles["home-page"]}>
      <Header />
      <main className={styles["home-page__content"]}>
        <div className={styles["home-page__cards-container"]}>
          {PROJECTS.map((project) => (
            <ComponentCard
              key={project.id}
              title={t(project.titleKey)}
              image={project.image}
              features={project.featureKeys.map((key) => t(key))}
              onClick={() => navigate(project.route)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export { HomePage };

