import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.scss";

export default function FaqLinks() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);

  const switchItems = [
    {
      link: "#reportVulnerabilities",
    },
    {
      link: "#qualifyingVulnerabilities",
    },
    {
      link: "#scopeVulnerabilities",
    },
    {
      link: "#specialScenarios",
    },
    {
      link: "#vulnerabilitiesClassified",
    },
    {
      link: "#howMuchRewarded",
    },
    {
      link: "#eligible",
    },
    {
      link: "#validity",
    },
    {
      link: "#HowLong",
    },
  ];

  return (
    <div className={styles.faq_links__list}>
      {switchItems.map((item, index) => (
        <a
          className={
            styles.faq_links__item +
            (index === activeIndex ? " " + styles.active : "")
          }
          onClick={() => setActiveIndex(index)}
          key={index}
          href={item.link}
        >
          {t("faqSwitchItem" + (index + 1))}
        </a>
      ))}
    </div>
  );
}
