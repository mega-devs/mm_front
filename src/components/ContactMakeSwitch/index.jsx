import { useTranslation } from 'react-i18next'
import styles from './style.module.scss'
import Item from '../Item'
import { useMemo } from 'react'
import MyLink from '../../ui/MyLink'
import Spoiler from '../Spoiler'

export default function ContactMakeSwitch({
	index,
	title,
	description,
	items = []
}) {
	const { t } = useTranslation()

	const itemsMemo = useMemo(() => items, [items])

	return (
		<li className={styles.switch}>
			<Spoiler
				title={title}
				content={
					<>
						{description && (
							<div className={styles.switch__description}>{description}</div>
						)}
						<ul className={styles.switch__list}>
							{items?.length &&
								itemsMemo?.map((item, i) => (
									<Item
										className={styles.switch__item}
										key={i}
										variant='red'
										action={
											<MyLink to={item?.link} withArrow={true}>
												{t('contactMakeItemItemLink' + index + (i + 1))}
											</MyLink>
										}
										svg={item?.svg}
										title={t('contactMakeItemItemTitle' + index + (i + 1))}
										descriptionHtml={t(
											'contactMakeItemItemDescription' + index + (i + 1)
										)}
									/>
								))}
						</ul>
					</>
				}
			/>
		</li>
	)
}
