import styles from "./FeatureTag.module.css";

interface IFeatureTag {
  children: string;
}

function FeatureTag({ children }: IFeatureTag) {
  return (
    <div className={styles["feature-tag"]}>
      <p className={styles["feature-tag__text"]}>{children}</p>
    </div>
  );
}

export { FeatureTag };

