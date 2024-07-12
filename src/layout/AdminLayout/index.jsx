import styles from "./style.module.scss";
import Footer from "../../components/Footer";
import AdminHeader from "../../components/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminHeader />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
