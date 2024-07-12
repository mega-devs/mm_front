import { useTranslation } from "react-i18next";
import LogoSvg from "../../app/svg/LogoSvg";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  const menu = [
    {
      title: t("footerMenuProducts"),
      items: [
        {
          title: t("footerMenuItemCloudStorage"),
          link: "/",
        },
        {
          title: t("footerMenuItemObjectStorage"),
          link: "/",
        },
        {
          title: t("footerMenuItemVpn"),
          link: "/",
        },
        {
          title: t("footerMenuItemSync"),
          link: "/",
        },
        {
          title: t("footerMenuItemBackup"),
          link: "/",
        },
        {
          title: t("footerMenuItemShare"),
          link: "/",
        },
        {
          title: t("footerMenuItemMediaFiles"),
          link: "/",
        },
        {
          title: t("footerMenuItemChatAndMeetings"),
          link: "/",
        },
        {
          title: t("footerMenuItemBusiness"),
          link: "/",
        },
      ],
    },
    {
      title: t("footerMenuSolutions"),
      items: [
        {
          title: t("footerMenuItemIndividuals"),
          link: "/",
        },
        {
          title: t("footerMenuItemFreelancers"),
          link: "/",
        },
        {
          title: t("footerMenuItemSmallBusiness"),
          link: "/",
        },
      ],
    },
    {
      title: t("footerMenuPlatforms"),
      items: [
        {
          title: t("footerMenuItemMobileApps"),
          link: "/",
        },
        {
          title: t("footerMenuItemDesktopApps"),
          link: "/",
        },
        {
          title: t("footerMenuItemBrowserExtensions"),
          link: "/",
        },
        {
          title: t("footerMenuItemMEGACMD"),
          link: "/",
        },
        {
          title: t("footerMenuItemCMDforNAS"),
          link: "/",
        },
      ],
    },
    {
      title: t("footerMenuCompany"),
      items: [
        {
          title: t("footerMenuAboutUs"),
          link: "/",
        },
        {
          title: t("footerMenuCareers"),
          link: "/",
        },
        {
          title: t("footerMenuMedia"),
          link: "/",
        },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__container}>
          <div className={styles.footer__left}>
            <LogoSvg />
            <p className="text-uppercase">{t("footerPrivacy")}</p>
            <p
              className={styles.footer__small + " text-uppercase"}
              dangerouslySetInnerHTML={{ __html: t("footerEncrypted") }}
            ></p>
          </div>
          <div className={styles.footer__right}>
            {menu.map((item, index) => (
              <ul key={index} className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <div className={styles.footer__item_title}>{item.title}</div>
                  <ul className={styles.footer__item_list}>
                    {item.items.map((elem, index) => (
                      <li key={index} className={styles.footer__item_item}>
                        <Link to={elem.link}>{elem.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
