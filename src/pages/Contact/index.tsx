import { ContactHelp, ContactMake } from '@/components'
import ClientLayout from '@/layout/ClientLayout'

import styles from './style.module.scss'

const Contact = () => {
	return (
		<ClientLayout>
			<div className={styles.contact}>
				<div className='container'>
					<div>
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

export default Contact
