import PricingChoose from "../../components/PricingChoose";
import PricingTable from "../../components/PricingTable";
import ClientLayout from "../../layout/ClientLayout";
import styles from "./style.module.scss";

export default function Pricing() {
  return (
    <ClientLayout>
      <div className={styles.pricing}>
        <img className={styles.pricing__img} src="/images/Group 29.svg" />
        <img className={styles.pricing__img} src="/images/Group 28.svg" />
        <div className="container">
          <div className={styles.pricing__content}>
            <PricingChoose />
            <PricingTable />
            {/* <FaqContent /> */}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
