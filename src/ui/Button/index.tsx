import { ComponentProps, FC, PropsWithChildren } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps extends ComponentProps<'button'> {
	className?: string
	variant?: 'outlined' | 'black'
	disabled?: boolean
}

const Button: FC<PropsWithChildren<IProps>> = ({
	className,
	children,
	variant,
	disabled,
	...other
}) => {
	const styleClassName = setClassName(className)
	const styleVariant = setClassName(styles[variant])

	return (
		<button
			disabled={disabled}
			className={styles.btn + styleClassName + styleVariant}
			{...other}
		>
			{children}
		</button>
	)
}

export default Button
