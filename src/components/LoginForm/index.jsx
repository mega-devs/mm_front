import { useForm } from "react-hook-form";
import styles from "./style.module.scss";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";
import InputForm from "../../Form/InputForm";
import Checkbox from "../../ui/Checkbox";
import MyLink from "../../ui/MyLink";
import { ROUTE_NAMES } from "../../app/router";

export default function LoginForm() {
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
      className={styles.login_form + " style-block"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className={styles.login_form__inputs + " form-inputs"}>
          <InputForm
            className={styles.login_form__input}
            error={errors.email?.type}
            rules={{ required: true, minLength: 10 }}
            register={register}
            name="email"
            placeholder={t("formEmail")}
          />
          <InputForm
            className={styles.login_form__input}
            error={errors.password?.type}
            rules={{ required: true, minLength: 10 }}
            register={register}
            name="password"
            placeholder={t("formPassword")}
          />
          <p>{t("loginForgot")}</p>
          <Checkbox>{t("loginFormCheckbox1")}</Checkbox>
        </div>
      </div>
      <Button
        className={styles.login_form__button}
        onClick={() => console.log(errors.name)}
      >
        {t("logIn")}
      </Button>
      <div>
        {t("loginDontAccount")}{" "}
        <MyLink to={ROUTE_NAMES.login}>{t("loginRegister")}</MyLink>
      </div>
    </form>
  );
}
