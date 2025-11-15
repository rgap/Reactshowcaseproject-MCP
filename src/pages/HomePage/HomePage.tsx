import { useI18n } from "../../hooks/useI18n";
import { ComponentCard } from "../../components";
import { PROJECTS } from "./HomePage.constants";
import styles from "./HomePage.module.css";

function HomePage() {
  const { t } = useI18n();

  return (
    <div className={styles["home-page"]}>
      <div className={styles["home-page__content"]}>
        {PROJECTS.map((project) => (
          <ComponentCard
            key={project.id}
            title={t(project.titleKey)}
            image={project.image}
            features={project.features.map((featureKey) => t(featureKey))}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export { HomePage };

