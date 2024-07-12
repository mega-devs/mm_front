import { useMemo, useState } from "react";
import TitleMiddle from '../../ui/TitleMiddle';
import styles from "./style.module.scss";

export default function Spoiler({ title, content }) {
  const [active, setActive] = useState(false);

  const activeSwitchClass = useMemo(() => {
    if (active) {
      return " " + styles.active;
    }

    return "";
  }, [active]);

  return (
    <div className={styles.spoiler + activeSwitchClass}>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={styles.spoiler__switch}
      >
        <TitleMiddle className={styles.spoiler__title}>{title}</TitleMiddle>
        <svg
          className={styles.spoiler__arrow}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 9.5L12 14.5L7 9.5"
            stroke="var(--third-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles.spoiler__content}>{content}</div>
    </div>
  );
}
