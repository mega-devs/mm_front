import React from 'react'
import { Lang } from '@/icons'
import { useTranslation } from 'react-i18next'
import styles from './style.module.scss'

const LangChooseButton = () => {
	const { t } = useTranslation()
	const [active, setActive] = React.useState<boolean>(false)
	return (
		<div className={styles.item} onClick={() => setActive(!active)}>
			<Lang />
			{t('lang')}
			{active && (
				<div className={styles.dropDown}>
					<ul className={styles.list}>
						<li className={styles.li}>{'DE'}</li>
						<li className={styles.li}>{'EN'}</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default LangChooseButton
