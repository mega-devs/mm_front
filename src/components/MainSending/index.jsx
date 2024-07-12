import { useTranslation } from "react-i18next";
import Title from "../../ui/Title";
import styles from "./style.module.scss";
import MyLink from "../../ui/MyLink";
import Item from "../Item";

export default function MainSending() {
  const { t } = useTranslation();
  const list = [1, 2, 3, 4];

  return (
    <div className={styles.sending}>
      <div className="container">
        <div className={styles.sending__container}>
          <div className={styles.sending__left}>
            <div className={styles.sending__text}>
              <Title>{t("sendingTitle")}</Title>
              <div
                className={styles.sending__description}
                dangerouslySetInnerHTML={{ __html: t("sendingDescription") }}
              ></div>
              <MyLink to="/" withArrow={true}>
                {t("sendingMore")}
              </MyLink>
            </div>
            <ul className={styles.sending__list}>
              {list.map((item) => (
                <Item
                  key={item}
                  title={t("sendingTitle" + item)}
                  descriptionHtml={t("sendingDescription" + item)}
                ></Item>
              ))}
            </ul>
          </div>
          <div className={styles.sending__right}>
            <img
              className={styles.sending__img}
              src="/images/Art 2 2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
