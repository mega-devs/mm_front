import { FC } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps {
	className?: string
	type?: string
}

const Input: FC<IProps> = ({ className, type = 'text', ...other }) => {
	const styleClassName = setClassName(className)

	return (
		<input className={styles.input + styleClassName} type={type} {...other} />
	)
}

export default Input
