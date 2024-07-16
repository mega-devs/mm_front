import styles from './style.module.scss'
import HelpTop from '../../components/HelpTop'
import HelpList from '../../components/HelpList'
import ClientLayout from '../../layout/ClientLayout'

export default function Help() {
	return (
		<ClientLayout>
			<div className={styles.help}>
				<img className={styles.help__img} src='/images/Group 29.svg' />
				<img className={styles.help__img} src='/images/Group 28.svg' />
				<div className='container'>
					<div className={styles.help__content}>
						<HelpTop />
						<HelpList />
					</div>
				</div>
			</div>
		</ClientLayout>
	)
}
