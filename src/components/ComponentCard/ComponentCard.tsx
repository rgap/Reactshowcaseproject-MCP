import { Link } from "react-router-dom";
import { FeatureTag } from "../FeatureTag";
import styles from "./ComponentCard.module.css";

interface IComponentCard {
  title: string;
  image: string;
  features: string[];
  link?: string;
}

function ComponentCard({ title, image, features, link }: IComponentCard) {
  const content = (
    <>
      <img src={image} alt={title} className={styles["component-card__image"]} />
      <div className={styles["component-card__content"]}>
        <h3 className={styles["component-card__title"]}>{title}</h3>
        <div className={styles["component-card__features"]}>
          {features.map((feature) => (
            <FeatureTag key={feature}>{feature}</FeatureTag>
          ))}
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <Link to={link} className={styles["component-card"]}>
        {content}
      </Link>
    );
  }

  return <div className={styles["component-card"]}>{content}</div>;
}

export { ComponentCard };

