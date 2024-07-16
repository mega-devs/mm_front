import styles from './style.module.scss'
import ClientLayout from '../../layout/ClientLayout'
import Title from '../../ui/Title'
import { useTranslation } from 'react-i18next'
import ContactHelp from '../../components/ContactHelp'
import ContactMake from '../../components/ContactMake'

export default function Contact() {
	return (
		<ClientLayout>
			<div className={styles.contact}>
				<div className='container'>
					<div className={styles.contact__container}>
						<img className={styles.contact__img} src='/images/Group 29.svg' />
						<img className={styles.contact__img} src='/images/Group 28.svg' />
						<div className={styles.contact__content}>
							<ContactHelp />
							<ContactMake />
						</div>
					</div>
				</div>
			</div>
		</ClientLayout>
	)
}
