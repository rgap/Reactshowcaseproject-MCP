import { ComponentCard } from "../../components/ComponentCard";
import { PROJECTS } from "./HomePage.constants";
import styles from "./HomePage.module.css";

function HomePage() {
  const handleProjectClick = (projectId: string) => {
    console.log(`Project clicked: ${projectId}`);
  };

  return (
    <main className={styles["home-page"]}>
      <div className={styles["home-page__container"]}>
        <div className={styles["home-page__grid"]}>
          {PROJECTS.map((project) => (
            <ComponentCard
              key={project.id}
              title={project.title}
              imageUrl={project.imageUrl}
              features={project.features}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export { HomePage };


