import { setClassName } from '../../app/utils/class'
import styles from './style.module.scss'

export default function Line({ className, ...other }) {
	const styleClassName = setClassName(className)

	return <div className={styles.line + styleClassName} {...other} />
}
