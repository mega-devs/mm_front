import { FaqContent } from '@/components'
import ClientLayout from '@/layout/ClientLayout'

import styles from './style.module.scss'

const Faq = () => {
	return (
		<ClientLayout>
			<div className={styles.faq}>
				<img className={styles.faq__img} src='/images/Group 29.svg' />
				<img className={styles.faq__img} src='/images/Group 28.svg' />
				<div className='container'>
					<div className={styles.faq__content}>
						<FaqContent />
					</div>
				</div>
			</div>
		</ClientLayout>
	)
}

export default Faq
