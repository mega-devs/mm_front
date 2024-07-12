import styles from "./style.module.scss";
import TitleSmall from "../../ui/TitleSmall";
import Title from "../../ui/Title";
import { useTranslation } from "react-i18next";
import TitleMiddle from "../../ui/TitleMiddle";
import P from "../../ui/P";
import Ul from "../../ui/Ul";
import Line from "../../ui/Line";
import FaqLinks from "../FaqLinks";

export default function FaqContent() {
  const { t } = useTranslation();

  return (
    <div className={styles.faq_content}>
      <Title variant="center">{t("faqTitle")}</Title>
      <div className="text-center">{t("faqSubtitle")}</div>
      <div className={styles.faq_content__block}>
        <div className={styles.faq_content__left + " style-block"}>
          <TitleSmall variant="uppercase">{t("faqSwitchTitle")}</TitleSmall>
          <FaqLinks />
        </div>
        <div className={styles.faq_content__right}>
          <div className={styles.faq_content__paragraph}>
            <TitleMiddle>{t("faqTextBigTitle")}</TitleMiddle>
            <P>{t("faqTextContent1")}</P>
          </div>
          <div
            className={styles.faq_content__paragraph}
            id="reportVulnerabilities"
          >
            <TitleSmall>{t("faqTextTitle1")}</TitleSmall>
            <P>{t("faqTextContent2")}</P>
            <P>{t("faqTextContent3")}</P>
          </div>
          <div
            className={styles.faq_content__paragraph}
            id="qualifyingVulnerabilities"
          >
            <TitleSmall>{t("faqTextTitle2")}</TitleSmall>
            <Ul>
              <li>{t("faqTextTitleLi1")}</li>
              <li>{t("faqTextTitleLi2")}</li>
              <li>{t("faqTextTitleLi3")}</li>
              <li>{t("faqTextTitleLi4")}</li>
              <li>{t("faqTextTitleLi5")}</li>
              <li>{t("faqTextTitleLi6")}</li>
            </Ul>
          </div>
          <div
            className={styles.faq_content__paragraph}
            id="scopeVulnerabilities"
          >
            <TitleSmall>{t("faqTextTitle3")}</TitleSmall>
            <Ul>
              <li>{t("faqTextTitleLi7")}</li>
              <li>{t("faqTextTitleLi8")}</li>
              <li>{t("faqTextTitleLi9")}</li>
              <li>{t("faqTextTitleLi10")}</li>
              <li>{t("faqTextTitleLi11")}</li>
              <li>{t("faqTextTitleLi12")}</li>
              <li>{t("faqTextTitleLi13")}</li>
              <li>{t("faqTextTitleLi14")}</li>
              <li>{t("faqTextTitleLi15")}</li>
              <li>{t("faqTextTitleLi16")}</li>
              <li>{t("faqTextTitleLi17")}</li>
            </Ul>
          </div>
          <div className={styles.faq_content__paragraph} id="specialScenarios">
            <TitleSmall>{t("faqTextTitle4")}</TitleSmall>
            <P dangerouslySetInnerHTML={{ __html: t("faqTextContent4") }}></P>
          </div>
          <div
            className={styles.faq_content__paragraph}
            id="vulnerabilitiesClassified"
          >
            <TitleSmall>{t("faqTextTitle5")}</TitleSmall>
            <P>{t("faqTextContent5")}</P>
            <Ul>
              <li
                dangerouslySetInnerHTML={{ __html: t("faqTextTitleLi18") }}
              ></li>
              <br />
              <li
                dangerouslySetInnerHTML={{ __html: t("faqTextTitleLi19") }}
              ></li>
              <br />
              <li
                dangerouslySetInnerHTML={{ __html: t("faqTextTitleLi20") }}
              ></li>
              <br />
              <li
                dangerouslySetInnerHTML={{ __html: t("faqTextTitleLi21") }}
              ></li>
              <br />
              <li
                dangerouslySetInnerHTML={{ __html: t("faqTextTitleLi22") }}
              ></li>
              <br />
              <li
                dangerouslySetInnerHTML={{ __html: t("faqTextTitleLi23") }}
              ></li>
            </Ul>
          </div>
          <div className={styles.faq_content__paragraph} id="howMuchRewarded">
            <TitleSmall>{t("faqTextTitle6")}</TitleSmall>
            <P dangerouslySetInnerHTML={{ __html: t("faqTextContent6") }}></P>
          </div>
          <div className={styles.faq_content__paragraph} id="eligible">
            <TitleSmall>{t("faqTextTitle7")}</TitleSmall>
            <P>{t("faqTextContent7")}</P>
          </div>
          <div className={styles.faq_content__paragraph} id="validity">
            <TitleSmall>{t("faqTextTitle8")}</TitleSmall>
            <P>{t("faqTextContent8")}</P>
          </div>
          <div className={styles.faq_content__paragraph} id="HowLong">
            <TitleSmall>{t("faqTextTitle9")}</TitleSmall>
            <P>{t("faqTextContent9")}</P>
          </div>
          <Line />
          <div className={styles.faq_content__paragraph}>
            <P>{t("faqTextContent10")}</P>
            <P>{t("faqTextContent11")}</P>
          </div>
        </div>
      </div>
    </div>
  );
}
