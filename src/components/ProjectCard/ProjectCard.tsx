import { Tag } from "../Tag";
import styles from "./ProjectCard.module.css";
import { cx } from "../../utils/cx";

interface IProjectCard {
  title: string;
  image: string;
  tags: string[];
  className?: string;
  onClick?: () => void;
}

function ProjectCard({ title, image, tags, className = "", onClick }: IProjectCard) {
  const cardClasses = cx(styles.card, className);

  return (
    <div className={cardClasses} onClick={onClick}>
      <img src={image} alt={title} className={styles.card__image} />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <div className={styles.card__tags}>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ProjectCard };

