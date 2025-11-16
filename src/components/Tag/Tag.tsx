import styles from "./Tag.module.css";
import { cx } from "../../utils/cx";

interface ITag {
  children: React.ReactNode;
  className?: string;
}

function Tag({ children, className = "" }: ITag) {
  const tagClasses = cx(styles.tag, className);

  return <div className={tagClasses}>{children}</div>;
}

export { Tag };

