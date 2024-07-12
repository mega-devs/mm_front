import { useTranslation } from "react-i18next";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import Title from "../../ui/Title";
import AdminIndicators from "../AdminIndicators";
import ClearSvg from "../../app/svg/ClearSvg";
import SelectSvg from "../../app/svg/SelectSvg";
import Checkbox from "../../ui/Checkbox";
import InputForm from "../../Form/InputForm";
import ButtonSmall from "../../ui/ButtonSmall";
import Button from "../../ui/Button";
import CheckboxForm from "../../Form/CheckboxForm";

export default function ProxyFrom() {
  const { t } = useTranslation();

  const { register, getValues, handleSubmit } = useForm();

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  const indicators = [
    [
      {
        title: t("adminIndicators1"),
        value: 0,
      },
      {
        title: t("adminIndicators2"),
        value: 0,
      },
      {
        title: t("adminIndicators3"),
        value: 0,
      },
      {
        title: t("adminIndicators4"),
        value: 0,
      },
    ],
    [
      {
        title: t("adminIndicators5"),
        value: 0,
      },
      {
        title: t("adminIndicators6"),
        value: 0,
      },
      {
        title: t("adminIndicators7"),
        value: 0,
      },
      {
        title: t("adminIndicators8"),
        value: 0,
      },
    ],
    [
      {
        title: t("adminIndicators9"),
        value: 0,
      },
      {
        title: t("adminIndicators10"),
        value: 0,
      },
      {
        title: t("adminIndicators11"),
        value: 0,
      },
      {
        title: t("adminIndicators12"),
        value: 0,
      },
    ],
    [
      {
        title: t("adminIndicators13"),
        value: 0,
      },
      {
        title: t("adminIndicators14"),
        value: 0,
      },
      {
        title: t("adminIndicators15"),
        value: "00:00:00",
      },
      {
        title: t("adminIndicators16"),
        value: "00h 00m",
      },
    ],
  ];

  return (
    <div className={styles.proxy_form}>
      <div className={styles.proxy_form__top}>
        <Title>{t("proxyFormTitle")}</Title>
        <Button className={styles.proxy_form__file}>
          C:/Users....................
        </Button>
      </div>
      <form
        className={styles.proxy_form__form}
        onSubmit={onSubmit}
        method="POST"
      >
        <div className={styles.proxy_form__application + " btns"}>
          <ButtonSmall>
            <SelectSvg />
            <span>{t("proxyFormButton1")}</span>
          </ButtonSmall>
          <ButtonSmall>
            <ClearSvg />
            <span>{t("proxyFormButton2")}</span>
          </ButtonSmall>
        </div>
        <div className={styles.proxy_form__form_content}>
          <div className={styles.proxy_form__fields + " form-inputs"}>
            <InputForm
              label={t("proxyFormInput1")}
              register={register}
              name="threads"
            />
            <InputForm
              label={t("proxyFormInput2")}
              register={register}
              name="sec"
            />
            <CheckboxForm register={register} name="https">
              {t("proxyFormCheckbox1")}
            </CheckboxForm>
            <CheckboxForm register={register} name="socks">
              {t("proxyFormCheckbox2")}
            </CheckboxForm>
            <CheckboxForm register={register} variant="arrow" name="use_proxy">
              {t("proxyFormCheckbox3")}
            </CheckboxForm>
            <CheckboxForm register={register} variant="arrow" name="download_every">
              {t("proxyFormCheckbox4")}
            </CheckboxForm>
          </div>
          <AdminIndicators indicators={indicators} />
        </div>
      </form>
    </div>
  );
}
