import { FeatureTag } from "../FeatureTag";
import styles from "./ComponentCard.module.css";

interface IComponentCard {
  title: string;
  image: string;
  features: string[];
  onClick?: () => void;
}

function ComponentCard({ title, image, features, onClick }: IComponentCard) {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <div className={styles["component-card"]} onClick={handleClick}>
      <img
        src={image}
        alt={title}
        className={styles["component-card__image"]}
      />
      <div className={styles["component-card__content"]}>
        <h2 className={styles["component-card__title"]}>{title}</h2>
        <div className={styles["component-card__tags"]}>
          {features.map((feature, index) => (
            <FeatureTag key={index}>{feature}</FeatureTag>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ComponentCard };

