import { FeatureTag } from "../FeatureTag";
import styles from "./ComponentCard.module.css";

interface IComponentCard {
  title: string;
  image: string;
  features: string[];
}

function ComponentCard({ title, image, features }: IComponentCard) {
  return (
    <div className={styles["component-card"]}>
      <img src={image} alt={title} className={styles["component-card__image"]} />
      <div className={styles["component-card__content"]}>
        <h3 className={styles["component-card__title"]}>{title}</h3>
        <div className={styles["component-card__features"]}>
          {features.map((feature) => (
            <FeatureTag key={feature}>{feature}</FeatureTag>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ComponentCard };

