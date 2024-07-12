import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function TitleMiddle({
  className,
  children,
  variant,
  isDiv = false,
  ...other
}) {
  const styleClassName = setClassName(className);
  const styleVariant = setClassName(styles[variant]);

  if (isDiv) {
    <div className={styles.title + styleClassName + styleVariant} {...other}>
      {children}
    </div>;
  }

  return (
    <h3 className={styles.title + styleClassName + styleVariant} {...other}>
      {children}
    </h3>
  );
}
