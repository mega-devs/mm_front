import styles from "./style.module.scss";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";
import AdminIndicators from "../AdminIndicators";
import InputForm from "../../Form/InputForm";
import { useForm } from "react-hook-form";
import Checkbox from "../../ui/Checkbox";
import ButtonSmall from "../../ui/ButtonSmall";
import ClearSvg from "../../app/svg/ClearSvg";
import StartSvg from "../../app/svg/StartSvg";
import RecheckSvg from "../../app/svg/RecheckSvg";

export default function SmptForm() {
  const { t } = useTranslation();

  const { register } = useForm();

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
    <div className={styles.smpt_form}>
      <div className={styles.smpt_form__top}>
        <Title>{t("smptFormTitle")}</Title>
        <div className={styles.smpt_form__host}>
          host:mail:pass:not
          <br />
          host:login:pass:port:from(AWS)
        </div>
        <Button className={styles.smpt_form__file}>{t("smptFormFile")}</Button>
      </div>
      <form className={styles.smpt_form__form} method="POST">
        <div className={styles.smpt_form__application + " btns"}>
          <ButtonSmall>
            <ClearSvg />
            <span>{t("smptFormButton1")}</span>
          </ButtonSmall>
          <ButtonSmall>
            <ClearSvg />
            <span>{t("smptFormButton2")}</span>
          </ButtonSmall>
          <ButtonSmall>
            <ClearSvg />
            <span>{t("smptFormButton3")}</span>
          </ButtonSmall>
          <ButtonSmall>
            <StartSvg />
            <span>{t("smptFormButton4")}</span>
          </ButtonSmall>
          <ButtonSmall>
            <RecheckSvg />
            <span>{t("smptFormButton5")}</span>
          </ButtonSmall>
        </div>
        <div className={styles.smpt_form__form_content}>
          <div className={styles.smpt_form__fields + " form-inputs"}>
            <InputForm
              label={t("smptFormInput1")}
              register={register}
              name="threads"
            />
            <InputForm
              label={t("smptFormInput2")}
              register={register}
              name="sec"
            />
            <div className={"form-inputs__many"}>
              <InputForm
                label={t("smptFormInput3")}
                register={register}
                name="not"
              />
              <InputForm
                label={t("smptFormInput4")}
                register={register}
                name="min"
              />
            </div>
            <InputForm
              label={t("smptFormInput5")}
              register={register}
              name="attempts_dns1"
            />
            <InputForm
              label={t("smptFormInput6")}
              register={register}
              name="attempts_dns2"
            />
            <InputForm
              label={t("smptFormInput7")}
              register={register}
              name="attempts_smpt"
            />
            <InputForm
              label={t("smptFormInput8")}
              register={register}
              name="massages_smpt"
            />
            <InputForm
              label={t("smptFormInput9")}
              register={register}
              name="recipients"
            />
            <div className="form-field">
              <InputForm
                label={t("smptFormInput10")}
                register={register}
                name="helo"
              />
              <Checkbox>{t("smptFormCheckbox1")}</Checkbox>
            </div>
          </div>
          <AdminIndicators indicators={indicators} />
        </div>
      </form>
    </div>
  );
}
