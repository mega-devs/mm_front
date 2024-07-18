import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { ROUTE_NAMES } from '@/router'
import { BigTitle, Button } from '@/ui'

import styles from './style.module.scss'

const MainQuick = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.quick}>
			<div className={styles.quick__left}>
				<BigTitle>{t('quickTitle')}</BigTitle>
				<p>{t('quickDescription')}</p>
				<Link to={ROUTE_NAMES.register}>
					<Button>{t('quickButton')}</Button>
				</Link>
			</div>
			<div>
				<img className={styles.quick__img} src='/images/Art 1 2.png' />
			</div>
		</div>
	)
}

export default MainQuick
