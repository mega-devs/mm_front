import { useTranslation } from "react-i18next";
import BigTitle from "../../ui/BigTitle";
import Button from "../../ui/Button";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../app/router";

export default function MainQuick() {
  const { t } = useTranslation();

  return (
    <div className={styles.quick}>
      <div className={styles.quick__left}>
        <BigTitle>{t("quickTitle")}</BigTitle>
        <p>{t("quickDescription")}</p>
        <Link to={ROUTE_NAMES.register}>
          <Button>{t("quickButton")}</Button>
        </Link>
      </div>
      <div className={styles.quick__right}>
        <img className={styles.quick__img} src="/images/Art 1 2.png" />
      </div>
    </div>
  );
}
