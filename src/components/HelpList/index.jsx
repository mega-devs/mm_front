import { useTranslation } from "react-i18next";
import Title from "../../ui/Title";
import styles from "./style.module.scss";
import Spoiler from "../Spoiler";
import P from "../../ui/P";
import TitleSmall from "../../ui/TitleSmall";
import Ul from "../../ui/Ul";

export default function HelpList() {
  const { t } = useTranslation();

  const list = [
    {
      title: t("helpListItemBigTitle1"),
      content: (
        <div className={styles.help_list__content}>
          <P>{t("helpListItemContent11")}</P>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle12")}</TitleSmall>
            <P>{t("helpListItemContent12")}</P>
            <P>{t("helpListItemContent13")}</P>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle13")}</TitleSmall>
            <P>{t("helpListItemContent14")}</P>
            <Ul>
              <li>{t("helpListItemLi11")}</li>
              <li>{t("helpListItemLi12")}</li>
              <li>{t("helpListItemLi13")}</li>
            </Ul>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle14")}</TitleSmall>
            <P>{t("helpListItemContent15")}</P>
            <P>{t("helpListItemContent16")}</P>
            <P>{t("helpListItemContent17")}</P>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle15")}</TitleSmall>
            <P>{t("helpListItemContent18")}</P>
            <P>{t("helpListItemContent19")}</P>
            <P>{t("helpListItemContent110")}</P>
            <P>{t("helpListItemContent111")}</P>
            <P>{t("helpListItemContent112")}</P>
            <P>{t("helpListItemContent113")}</P>
          </div>
        </div>
      ),
    },
    {
      title: t("helpListItemBigTitle2"),
      content: (
        <div className={styles.help_list__content}>
          <div className={styles.help_list__content_item}>
            <P>{t("helpListItemContent21")}</P>
            <P>{t("helpListItemContent22")}</P>
            <P>{t("helpListItemContent23")}</P>
            <P>{t("helpListItemContent24")}</P>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle22")}</TitleSmall>
            <P>{t("helpListItemContent25")}</P>
            <Ul>
              <li>{t("helpListItemLi21")}</li>
              <li>{t("helpListItemLi22")}</li>
              <li>{t("helpListItemLi23")}</li>
            </Ul>
            <P>
              {t("helpListItemContent26")}
              <br />
              {t("helpListItemContent27")}
            </P>
            <P>{t("helpListItemContent28")}</P>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle23")}</TitleSmall>
            <P>{t("helpListItemContent29")}</P>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle24")}</TitleSmall>
            <P>{t("helpListItemContent210")}</P>
            <Ul>
              <li>{t("helpListItemLi24")}</li>
              <li>{t("helpListItemLi25")}</li>
              <li>{t("helpListItemLi26")}</li>
              <li>{t("helpListItemLi27")}</li>
              <li>{t("helpListItemLi28")}</li>
              <li>{t("helpListItemLi29")}</li>
              <li>{t("helpListItemLi210")}</li>
              <li>{t("helpListItemLi211")}</li>
              <li>{t("helpListItemLi212")}</li>
            </Ul>
            <P>{t("helpListItemContent211")}</P>
          </div>
        </div>
      ),
    },
    {
      title: t("helpListItemBigTitle3"),
      content: (
        <div className={styles.help_list__content}>
          <div className={styles.help_list__content_item}>
            <P>{t("helpListItemContent31")}</P>
            <P>{t("helpListItemContent32")}</P>
            <P>{t("helpListItemContent33")}</P>
            <P>{t("helpListItemContent34")}</P>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle32")}</TitleSmall>
            <Ul>
              <li>{t("helpListItemLi31")}</li>
              <li>{t("helpListItemLi32")}</li>
              <li>{t("helpListItemLi33")}</li>
              <li>{t("helpListItemLi34")}</li>
              <li>{t("helpListItemLi35")}</li>
              <li>{t("helpListItemLi36")}</li>
              <li>{t("helpListItemLi37")}</li>
            </Ul>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle33")}</TitleSmall>
            <P>{t("helpListItemContent35")}</P>
          </div>
        </div>
      ),
    },
    {
      title: t("helpListItemBigTitle4"),
      content: (
        <div className={styles.help_list__content}>
          <div className={styles.help_list__content_item}>
            <P>{t("helpListItemContent41")}</P>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle42")}</TitleSmall>
            <Ul>
              <li>
                <span
                  dangerouslySetInnerHTML={{ __html: t("helpListItemLi41") }}
                ></span>
              </li>
              <li>{t("helpListItemLi42")}</li>
              <li>{t("helpListItemLi43")}</li>
            </Ul>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle43")}</TitleSmall>
            <Ul>
              <li>
                <span
                  dangerouslySetInnerHTML={{ __html: t("helpListItemLi44") }}
                ></span>
              </li>
              <li>{t("helpListItemLi45")}</li>
              <li>{t("helpListItemLi46")}</li>
              <li>{t("helpListItemLi47")}</li>
            </Ul>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle44")}</TitleSmall>
            <Ul>
              <li>
                <span
                  dangerouslySetInnerHTML={{ __html: t("helpListItemLi48") }}
                ></span>
              </li>
              <li>{t("helpListItemLi49")}</li>
              <li>{t("helpListItemLi410")}</li>
              <li>{t("helpListItemLi411")}</li>
            </Ul>
          </div>
          <P>{t("helpListItemContent42")}</P>
        </div>
      ),
    },
    {
      title: t("helpListItemBigTitle5"),
      content: (
        <div className={styles.help_list__content}>
          <div className={styles.help_list__content_item}>
            <P>{t("helpListItemContent51")}</P>
            <P>{t("helpListItemContent52")}</P>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle52")}</TitleSmall>
            <P>{t("helpListItemContent53")}</P>
            <Ul>
              <li>{t("helpListItemLi51")}</li>
              <li>{t("helpListItemLi52")}</li>
              <li>{t("helpListItemLi53")}</li>
              <li>{t("helpListItemLi54")}</li>
              <li>{t("helpListItemLi55")}</li>
              <li>{t("helpListItemLi56")}</li>
              <li>{t("helpListItemLi57")}</li>
              <li>{t("helpListItemLi58")}</li>
            </Ul>
          </div>
          <P>{t("helpListItemContent54")}</P>
        </div>
      ),
    },
    {
      title: t("helpListItemBigTitle6"),
      content: (
        <div className={styles.help_list__content}>
          <div className={styles.help_list__content_item}>
            <P>{t("helpListItemContent61")}</P>
          </div>
          <div className={styles.help_list__content_item}>
            <TitleSmall>{t("helpListItemTitle62")}</TitleSmall>
            <P>{t("helpListItemContent62")}</P>
            <Ul>
              <li>
                <span>
                  <span>{t("helpListItemLi61")}</span>
                  <Ul>
                    <li>{t("helpListItemLi62")}</li>
                    <li>{t("helpListItemLi63")}</li>
                    <li>{t("helpListItemLi64")}</li>
                    <li>{t("helpListItemLi65")}</li>
                  </Ul>
                </span>
              </li>
              <br />
              <li>{t("helpListItemLi66")}</li>
              <br />
              <li>
                <span>
                  <span>{t("helpListItemLi67")}</span>
                  <Ul>
                    <li>{t("helpListItemLi68")}</li>
                  </Ul>
                </span>
              </li>
              <br />
              <li>{t("helpListItemLi69")}</li>
            </Ul>
            <div className={styles.help_list__content_item}>
              <TitleSmall>{t("helpListItemTitle63")}</TitleSmall>
              <P>{t("helpListItemContent63")}</P>
              <Ul>
                <li>{t("helpListItemLi610")}</li>
                <li>{t("helpListItemLi611")}</li>
                <li>{t("helpListItemLi612")}</li>
                <li>{t("helpListItemLi613")}</li>
                <li>{t("helpListItemLi614")}</li>
                <li>{t("helpListItemLi615")}</li>
                <li>{t("helpListItemLi616")}</li>
                <li>{t("helpListItemLi617")}</li>
              </Ul>
            </div>
            <P>{t("helpListItemContent64")}</P>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.help_list}>
      <Title>{t("helpListTitle")}</Title>
      <div>{t("helpListSubtitle")}</div>
      <ul className={styles.help_list__ul}>
        {list.map((item, index) => (
          <li className={styles.help_list__li}>
            <Spoiler key={index} title={item.title} content={item.content} />
          </li>
        ))}
      </ul>
    </div>
  );
}
