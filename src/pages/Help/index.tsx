import { HelpList, HelpTop } from '@/components'
import ClientLayout from '@/layout/ClientLayout'

import styles from './style.module.scss'

const Help = () => {
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

export default Help
