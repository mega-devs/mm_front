import { useTranslation } from 'react-i18next'
import Title from '../../ui/Title'
import styles from './style.module.scss'
import Button from '../../ui/Button'

export default function Chacking() {
	const { t } = useTranslation()

	return (
		<div className={styles.chacking}>
			<Title>{t('chackingTitle')}</Title>
			<div className={styles.chacking__stats}>
				<ul className={styles.chacking__list + ' btns'}>
					<li className={styles.chacking__item}>{t('chackingItem1')}: 71073</li>
					<li className={styles.chacking__item}>{t('chackingItem2')}: 31500</li>
					<li className={styles.chacking__item}>{t('chackingItem3')}: 12779</li>
					<li className={styles.chacking__item}>{t('chackingItem4')}: 18721</li>
					<li className={styles.chacking__item}>{t('chackingItem5')}: 0</li>
				</ul>
				<span>
					{t('chackingSpeed')}: 5510 {t('chackingAuthMin')}, 5510{' '}
					{t('chackingEmailMin')}
				</span>
			</div>
			<div className={styles.chacking__application}>
				<Button>{t('chackingStart')}</Button>
				<Button variant='black'>{t('chackingStop')}</Button>
			</div>
		</div>
	)
}
