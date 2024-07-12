import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function TitleSmall({ className, children, variant, ...other }) {
  const styleClassName = setClassName(className);
  const styleVariant = setClassName(styles[variant]);

  return (
    <h4 className={styles.title + styleClassName + styleVariant} {...other}>
      {children}
    </h4>
  );
}
