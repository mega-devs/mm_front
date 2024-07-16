import styles from './style.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ClientLayout({ children }) {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	)
}
