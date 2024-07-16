import { useTranslation } from 'react-i18next'
import TitleSmall from '../../ui/TitleSmall'
import styles from './style.module.scss'

export default function AdminIndicators({ indicators }) {
	const { t } = useTranslation()

	return (
		<div className={styles.admin_indicators + ' style-block'}>
			<TitleSmall
				className={styles.admin_indicators__title}
				variant='uppercase'
			>
				{t('adminIndicatorsTitle')}
			</TitleSmall>
			{indicators?.length &&
				indicators.map((item, i) => (
					<ul key={i} className={styles.admin_indicators__list}>
						{item?.length &&
							item.map((elem, i) => (
								<li key={i} className={styles.admin_indicators__item}>
									<span>{elem?.title}</span>
									<div className={styles.admin_indicators__count}>
										{elem?.value}
									</div>
								</li>
							))}
					</ul>
				))}
		</div>
	)
}
