import styles from "./Breadcrumb.module.css";
import { cx } from "../../utils/cx";

interface IBreadcrumb {
  children: React.ReactNode;
  className?: string;
}

function Breadcrumb({ children, className = "" }: IBreadcrumb) {
  const breadcrumbClasses = cx(styles.breadcrumb, className);

  return (
    <div className={breadcrumbClasses}>
      <span className={styles.breadcrumb__text}>{children}</span>
    </div>
  );
}

export { Breadcrumb };

