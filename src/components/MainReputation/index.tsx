import { useTranslation } from 'react-i18next'

import { Item } from '@/components'
import { MyLink, Title } from '@/ui'

import styles from './style.module.scss'

const MainReputation = () => {
	const { t } = useTranslation()
	const list = [1, 2, 3, 4]

	return (
		<div className={styles.reputation}>
			<div className={styles.reputation__left}>
				<div className={styles.reputation__text}>
					<Title>{t('reputationTitle')}</Title>
					<div
						dangerouslySetInnerHTML={{ __html: t('reputationDescription') }}
					></div>
					<span>
						<MyLink to='/' withArrow={true}>
							{t('reputationMore')}
						</MyLink>
					</span>
				</div>
				<ul className={styles.reputation__list}>
					{list.map(item => (
						<Item
							key={item}
							title={t('reputationTitle' + item)}
							descriptionHtml={t('reputationDescription' + item)}
						></Item>
					))}
				</ul>
			</div>
			<div>
				<img
					className={styles.reputation__img}
					src='/images/Art 2 1.png'
					alt=''
				/>
			</div>
		</div>
	)
}

export default MainReputation
