import { useForm } from "react-hook-form";
import styles from "./style.module.scss";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";
import InputForm from "../../Form/InputForm";

export default function ConfirmForm() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form
      className={styles.confirm_form + " style-block"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div style={{ width: "100%" }}>
        <div className={styles.confirm_form__inputs +  " form-inputs"}>
          <InputForm
            className={styles.confirm_form__input}
            // register={register}
            // name="name"
            // rules={{ required: "true", minLength: 10 }}
            error={errors.email?.type}
            rules={{ required: true, minLength: 10 }}
            register={register}
            name="email"
            placeholder={t("formEmail")}
            // register={register("name", { required: "true", minLength: 10 })}
          />
          <InputForm
            className={styles.confirm_form__input}
            error={errors.password?.type}
            rules={{ required: true, minLength: 10 }}
            register={register}
            name="password"
            placeholder={t("formPassword")}
          />
        </div>
      </div>
      <Button
        className={styles.confirm_form__button}
        onClick={() => console.log(errors.name)}
      >
        {t("confirmFormSubmit")}
      </Button>
    </form>
  );
}
