import { PricingChoose, PricingTable } from '@/components'
import ClientLayout from '@/layout/ClientLayout'

import styles from './style.module.scss'

const Pricing = () => {
	return (
		<ClientLayout>
			<div className={styles.pricing}>
				<img className={styles.pricing__img} src='/images/Group 29.svg' />
				<img className={styles.pricing__img} src='/images/Group 28.svg' />
				<div className='container'>
					<div className={styles.pricing__content}>
						<PricingChoose />
						<PricingTable />
					</div>
				</div>
			</div>
		</ClientLayout>
	)
}

export default Pricing
