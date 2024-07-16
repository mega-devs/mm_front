import { setClassName } from '../../app/utils/class'
import styles from './style.module.scss'

export default function Circle({ className, variant, ...other }) {
	const styleClassName = setClassName(className)
	const styleVariant = setClassName(styles[variant])

	return (
		<div className={styles.circle + styleClassName + styleVariant} {...other} />
	)
}
