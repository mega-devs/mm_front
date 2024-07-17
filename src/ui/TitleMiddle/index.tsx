import { ComponentProps, FC, PropsWithChildren } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps extends ComponentProps<'h3'> {
	className?: string
	variant?: 'uppercase'
	isDiv?: boolean
}

const TitleMiddle: FC<PropsWithChildren<IProps>> = ({
	className,
	children,
	variant,
	isDiv = false,
	...other
}) => {
	const styleClassName = setClassName(className)
	const styleVariant = setClassName(styles[variant])

	if (isDiv) {
		return (
			<div className={styles.title + styleClassName + styleVariant} {...other}>
				{children}
			</div>
		)
	}

	return (
		<h3 className={styles.title + styleClassName + styleVariant} {...other}>
			{children}
		</h3>
	)
}

export default TitleMiddle
