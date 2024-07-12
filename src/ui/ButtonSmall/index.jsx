import styles from "./style.module.scss";
import { setClassName } from "../../app/utils/class";

export default function ButtonSmall({ className, children, ...other }) {
  const styleClassName = setClassName(className);

  return (
    <button className={styles.btn + styleClassName} {...other}>
      {children}
    </button>
  );
}
