import styles from "./style.module.scss";
import ClientLayout from "../../layout/ClientLayout";
import Title from "../../ui/Title";
import { useTranslation } from "react-i18next";
import ConfirmForm from "../../components/ConfirmForm";

export default function Confirm() {
  const { t } = useTranslation();

  return (
    <ClientLayout>
      <div className="container">
        <div className={styles.confirm}>
          <Title>{t("confirmTitle")}</Title>
          <div className={styles.confirm__content}>
            <ConfirmForm />
            <img className={styles.confirm__img} src="/images/Art 2 2.png" alt="" width={661} />
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
