import { FC, PropsWithChildren } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps {
	className: string
	label: string
	error: any
}

const Control: FC<PropsWithChildren<IProps>> = ({
	className,
	label,
	error,
	children
}) => {
	const styleClassName = setClassName(className)

	return (
		<label className={styles.control + styleClassName}>
			{label && <span>{label}</span>}
			{children}
			{error && <span className={styles.control__error}>{error}</span>}
		</label>
	)
}

export default Control
