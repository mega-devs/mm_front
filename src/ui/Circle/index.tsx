import { FC } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps {
	className?: string
	variant?: 'red'
}

const Circle: FC<IProps> = ({ className, variant }) => {
	const styleClassName = setClassName(className)
	const styleVariant = setClassName(styles[variant])

	return <div className={styles.circle + styleClassName + styleVariant} />
}

export default Circle
