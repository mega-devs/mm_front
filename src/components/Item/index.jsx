import { setClassName } from '../../app/utils/class'
import TitleSmall from '../../ui/TitleSmall'
import styles from './style.module.scss'

export default function Item({
	className,
	svg,
	title,
	description,
	descriptionHtml,
	action,
	variant
}) {
	const styleClassName = setClassName(className)
	const styleVariant = setClassName(styles[variant])

	return (
		<li
			className={styles.item + styleClassName + styleVariant + ' style-block'}
		>
			{svg}
			{title && <TitleSmall className={styles.item__title}>{title}</TitleSmall>}
			{description && (
				<div className={styles.item__description}>{description}</div>
			)}
			{descriptionHtml && (
				<div
					className={styles.item__description}
					dangerouslySetInnerHTML={{ __html: descriptionHtml }}
				></div>
			)}
			{action && <div className={styles.item__action}>{action}</div>}
		</li>
	)
}
