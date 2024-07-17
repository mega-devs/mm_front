import { FC, ReactNode } from 'react'

import TitleSmall from '@/ui/TitleSmall'
import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps {
	className?: string
	svg?: ReactNode
	title: string
	description?: string | ReactNode
	descriptionHtml?: string
	action?: ReactNode
	variant?: 'red'
}

const Item: FC<IProps> = ({
	className,
	svg,
	title,
	description,
	descriptionHtml,
	action,
	variant
}) => {
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

export default Item
