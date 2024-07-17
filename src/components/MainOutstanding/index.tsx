import { useTranslation } from 'react-i18next'

import { BigTitle, Button } from '@/ui'

import styles from './style.module.scss'

const MainOutstanding = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.outstanding}>
			<div className={styles.outstanding__left}>
				<BigTitle className={styles.outstanding__title}>
					{t('outstandingTitle')}
				</BigTitle>
				<div className={styles.outstanding__description}>
					{t('outstandingDescription')}
				</div>
				<Button>{t('outstandingButton')}</Button>
			</div>
			<div className={styles.outstanding__right}>
				<img
					className={styles.outstanding__img}
					src='/images/Art 1 1.png'
					alt=''
					width={760}
				/>
			</div>
		</div>
	)
}

export default MainOutstanding
