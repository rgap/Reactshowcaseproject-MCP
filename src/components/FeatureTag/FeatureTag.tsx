import { FEATURE_TAG_SIZE, type FeatureTagSizeType } from "./FeatureTag.constants";
import styles from "./FeatureTag.module.css";

interface IFeatureTag {
  label: string;
  size?: FeatureTagSizeType;
}

function FeatureTag({ label, size = FEATURE_TAG_SIZE.MEDIUM }: IFeatureTag) {
  const tagClasses = [
    styles["feature-tag"],
    styles[`feature-tag--${size}`]
  ].filter(Boolean).join(" ");

  return (
    <div className={tagClasses}>
      <span className={styles["feature-tag__text"]}>{label}</span>
    </div>
  );
}

export { FeatureTag };


