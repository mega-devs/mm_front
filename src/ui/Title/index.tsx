import { ComponentProps, FC, PropsWithChildren } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps extends ComponentProps<'h2'> {
	className?: string
	variant?: 'center' | 'right'
}

const Title: FC<PropsWithChildren<IProps>> = ({
	className,
	children,
	variant,
	...other
}) => {
	const styleClassName = setClassName(className)
	const styleVariant = setClassName(styles[variant])

	return (
		<h2 className={styles.title + styleClassName + styleVariant} {...other}>
			{children}
		</h2>
	)
}

export default Title
