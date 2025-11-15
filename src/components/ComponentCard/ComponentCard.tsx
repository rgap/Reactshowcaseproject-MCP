import { FeatureTag } from "../FeatureTag";
import styles from "./ComponentCard.module.css";

interface IComponentCard {
  title: string;
  imageUrl: string;
  features: string[];
  onClick?: () => void;
}

function ComponentCard({ title, imageUrl, features, onClick }: IComponentCard) {
  return (
    <div className={styles["component-card"]} onClick={onClick}>
      <div className={styles["component-card__image-wrapper"]}>
        <img 
          src={imageUrl} 
          alt={title}
          className={styles["component-card__image"]}
        />
      </div>
      <div className={styles["component-card__content"]}>
        <h3 className={styles["component-card__title"]}>{title}</h3>
        <div className={styles["component-card__features"]}>
          {features.map((feature, index) => (
            <FeatureTag key={`${feature}-${index}`} label={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { ComponentCard };


