import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { I18nContext } from "../../contexts";
import { ProjectCard, LanguagePicker } from "../../components";
import styles from "./HomePage.module.css";

import tictactoeImage from "../../assets/tictactoe-preview.svg";
import pokeCollectionImage from "../../assets/poke-preview.svg";
import wordleImage from "../../assets/wordle-preview.svg";
import videoFeedImage from "../../assets/video-preview.svg";

function HomePage() {
  const { t } = useContext(I18nContext);
  const navigate = useNavigate();

  const projects = [
    {
      title: t("project-tictactoe"),
      image: tictactoeImage,
      tags: [
        t("tag-usestate"),
        t("tag-useeffect"),
        t("tag-customhooks"),
        t("tag-localstorage"),
        t("tag-cssmodules"),
        t("tag-otherfeature"),
        t("tag-otherfeature"),
      ],
      route: "/tic-tac-toe",
    },
    {
      title: t("project-pokecollection"),
      image: pokeCollectionImage,
      tags: [
        t("tag-usestate"),
        t("tag-useeffect"),
        t("tag-customhooks"),
        t("tag-localstorage"),
        t("tag-cssmodules"),
        t("tag-otherfeature"),
        t("tag-otherfeature"),
      ],
      route: "/poke-collection",
    },
    {
      title: t("project-wordle"),
      image: wordleImage,
      tags: [
        t("tag-usestate"),
        t("tag-useeffect"),
        t("tag-customhooks"),
        t("tag-localstorage"),
        t("tag-cssmodules"),
        t("tag-otherfeature"),
        t("tag-otherfeature"),
      ],
      route: "#",
    },
    {
      title: t("project-videofeed"),
      image: videoFeedImage,
      tags: [
        t("tag-usestate"),
        t("tag-useeffect"),
        t("tag-customhooks"),
        t("tag-localstorage"),
        t("tag-cssmodules"),
        t("tag-otherfeature"),
        t("tag-otherfeature"),
      ],
      route: "#",
    },
  ];

  const handleProjectClick = (route: string) => {
    if (route !== "#") {
      navigate(route);
    }
  };

  return (
    <div className={styles.home}>
      <header className={styles.home__header}>
        <div className={styles["home__header-container"]}>
          <h1 className={styles.home__title}>{t("app-title")}</h1>
          <LanguagePicker />
        </div>
      </header>
      <main className={styles.home__main}>
        <div className={styles.home__content}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              tags={project.tags}
              onClick={() => handleProjectClick(project.route)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export { HomePage };
