import { useTranslation } from 'react-i18next'

import ClientLayout from '@/layout/ClientLayout'
import { Title } from '@/ui'

import styles from './style.module.scss'

const TechnicalWork = () => {
	const { t } = useTranslation()

	return (
		<ClientLayout>
			<div className='container'>
				<div className={styles.TechnicalWork}>
					<img
						className={styles.TechnicalWork__img}
						src='/images/TechnicalWork.png'
						alt=''
					/>
					<Title>{t('technicalWorkTitle')}</Title>
				</div>
			</div>
		</ClientLayout>
	)
}

export default TechnicalWork
