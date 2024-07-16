import styles from './style.module.scss'
import { setClassName } from '../../app/utils/class'

export default function Button({
	className,
	children,
	variant,
	disabled,
	...other
}) {
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
