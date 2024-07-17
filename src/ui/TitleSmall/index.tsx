import { ComponentProps, FC, PropsWithChildren } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps extends ComponentProps<'h4'> {
	className?: string
	variant?: 'uppercase'
}

const TitleSmall: FC<PropsWithChildren<IProps>> = ({
	className,
	children,
	variant,
	...other
}) => {
	const styleClassName = setClassName(className)
	const styleVariant = setClassName(styles[variant])

	return (
		<h4 className={styles.title + styleClassName + styleVariant} {...other}>
			{children}
		</h4>
	)
}

export default TitleSmall
