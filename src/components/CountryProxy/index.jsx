import styles from "./style.module.scss";
import Title from "../../ui/Title";
import { useTranslation } from "react-i18next";

export default function CountryProxy({ countries }) {
  const { t } = useTranslation();

  return (
    <div className={styles.country_proxy}>
      <Title>{t("countryProxyTitle")}</Title>
      <div className={styles.country_proxy__table}>
        <table className={styles.country_proxy__table_inner}>
          <thead>
            <tr>
              <th className={styles.country_proxy__th}>
                {t("countryProxyContry")}
              </th>
              <th className={styles.country_proxy__th}>
                {t("countryProxySession")}
              </th>
              <th className={styles.country_proxy__th}>
                {t("countryProxyStatus")}
              </th>
            </tr>
          </thead>
          <tbody>
            {countries?.length &&
              countries?.map((item, index) => (
                <tr key={index}>
                  <td className={styles.country_proxy__td}>
                    <div
                      className={styles.country_proxy__country}
                      title={item?.country}
                    >
                      <img
                        className={styles.country_proxy__country_img}
                        src={item?.image}
                        alt={item?.country}
                        width={20}
                        height={20}
                      />
                      <span className="word-break">{item?.country}</span>
                    </div>
                  </td>
                  <td
                    className={styles.country_proxy__td + " word-break"}
                    title={item?.session}
                  >
                    {item?.session}
                  </td>
                  <td
                    className={styles.country_proxy__td + " word-break"}
                    title={item?.status}
                  >
                    {item?.status}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
