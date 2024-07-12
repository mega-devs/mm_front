import styles from "./style.module.scss";
import ClientLayout from "../../layout/ClientLayout";
import Title from "../../ui/Title";
import { useTranslation } from "react-i18next";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {
  const { t } = useTranslation();

  return (
    <ClientLayout>
      <div className="container">
        <div className={styles.register}>
          <Title>{t("registerTitle")}</Title>
          <div className={styles.register__content}>
            <RegisterForm />
            <img className={styles.register__img} src="/images/Art 2 2.png" alt="" width={661} />
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
