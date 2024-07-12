import { useForm } from "react-hook-form";
import styles from "./style.module.scss";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";
import InputForm from "../../Form/InputForm";
import MyLink from "../../ui/MyLink";
import { ROUTE_NAMES } from "../../app/router";
import CheckboxForm from "../../Form/CheckboxForm";
import { setErrorMessage } from "../../app/utils/error";
import { equalFields, regEmailPattern } from "../../app/utils/validate";

export default function RegisterForm() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, values },
    watch,
  } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form
      className={styles.register_form + " style-block"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        {/* <pre>
          {JSON.stringify(values)}
        </pre> */}
        <div className={styles.register_form__inputs + " form-inputs"}>
          <div className={styles.register_form__inputs_flex + " form-inputs__many"}>
            {/* <input {...register('adas', {
                validate: {
                  lol: (value) => {
                    if (value?.length % 2 === 0) return 'aboba';

                    return true;
                  }
                }
            })} /> */}
            <InputForm
              className={styles.register_form__input}
              error={setErrorMessage({ formField: errors.firstName, t })}
              rules={{
                required: true,
                minLength: {
                  value: 5,
                  message: t("form_minLength", {
                    min: 5,
                  }),
                },
              }}
              register={register}
              name="firstName"
              placeholder={t("formFirstName")}
            />
            <InputForm
              className={styles.register_form__input}
              error={setErrorMessage({ formField: errors.lastName, t })}
              rules={{ required: true, minLength: 10 }}
              register={register}
              name="lastName"
              placeholder={t("formLastName")}
            />
          </div>
          <InputForm
            className={styles.register_form__input}
            error={setErrorMessage({ formField: errors.email, t })}
            rules={{
              required: true,
              pattern: {
                value: regEmailPattern,
                message: t("form_email"),
              },
            }}
            register={register}
            name="email"
            placeholder={t("formEmail")}
          />
          <InputForm
            className={styles.register_form__input}
            error={setErrorMessage({ formField: errors.password, t })}
            rules={{
              required: true,
              validate: {
                confirm: (value) =>
                  equalFields(
                    value,
                    watch("passwordConfirm"),
                    t("form_confirm")
                  ),
              },
            }}
            register={register}
            name="password"
            type="password"
            placeholder={t("formPassword")}
          />
          <InputForm
            className={styles.register_form__input}
            error={setErrorMessage({ formField: errors.passwordConfirm, t })}
            rules={{
              required: true,
              validate: {
                // confirm: (value) =>
                //   equalFields(
                //     value,
                //     watch("password"),
                //     t("form_confirm")
                //   ),
              },
            }}
            register={register}
            name="passwordConfirm"
            type="password"
            placeholder={t("formPasswordConfirm")}
          />
        </div>
        <div className={styles.register_form__checkboxs}>
          <CheckboxForm
            name="understand"
            error={setErrorMessage({ formField: errors.understand, t })}
            rules={{ required: true }}
            register={register}
          >
            {t("registerFormCheckbox1")}
          </CheckboxForm>
          <CheckboxForm
            name="terms"
            error={setErrorMessage({ formField: errors.terms, t })}
            rules={{ required: true }}
            register={register}
          >
            {t("registerFormCheckbox2")}
          </CheckboxForm>
        </div>
      </div>
      <Button
        className={styles.register_form__button}
        onClick={() => console.log(errors)}
      >
        {t("registerFormSubmit")}
      </Button>
      <div>
        {t("registerFormAlready")}{" "}
        <MyLink to={ROUTE_NAMES.login}>{t("logIn")}</MyLink>
      </div>
    </form>
  );
}
