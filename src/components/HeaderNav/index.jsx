import { ROUTE_NAMES } from "../../app/router";
import HeaderNavItem from "../HeaderNavItem";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export default function HeaderNav() {
  const { t } = useTranslation();

  const menu = [
    {
      title: "headerNavProducts",
      items: [
        {
          title: "headerNavMailer",
          link: ROUTE_NAMES.mailing,
        },
        {
          title: "headerNavPackages",
          link: ROUTE_NAMES.imap,
        },
      ],
    },
    {
      title: "headerNavSolution",
      items: [
        {
          title: "headerNavAdvancedTechnology",
          link: ROUTE_NAMES.proxy,
        },
        {
          title: "headerNavInbuiltTools",
          link: ROUTE_NAMES.proxy,
        },
        {
          title: "headerNavAdvancedMailing",
          link: ROUTE_NAMES.imap,
        },
      ],
    },
    {
      title: "headerNavBusiness",
      link: ROUTE_NAMES.main,
    },
    {
      title: "headerNavPricing",
      items: [
        {
          title: "headerNavBasic",
          link: ROUTE_NAMES.pricing,
        },
        {
          title: "headerNavPremium",
          link: ROUTE_NAMES.pricing,
        },
        {
          title: "headerNavDeluxe",
          link: ROUTE_NAMES.pricing,
        },
      ],
    },
    {
      title: "headerNavHelp",
      items: [
        {
          title: "headerNavTicketSystem",
          link: ROUTE_NAMES.help,
        },
        {
          title: "headerNavTelegramSupport",
          link: ROUTE_NAMES.help,
        },
        {
          title: "headerNavLiveChatSupport",
          link: ROUTE_NAMES.faq,
        },
      ],
    },
  ];

  return (
    <nav className={styles.nav}>
      {menu.map((item) => (
        <HeaderNavItem key={item.title} {...item} />
      ))}
    </nav>
  );
}
