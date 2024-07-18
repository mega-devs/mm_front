import { FC, PropsWithChildren } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps {
	className?: string
	variant?: 'center' | 'right'
}

const BigTitle: FC<PropsWithChildren<IProps>> = ({
	className,
	children,
	variant
}) => {
	const styleClassName = setClassName(className)
	const styleVariant = setClassName(styles[variant])

	return (
		<div className={styles.title + styleClassName + styleVariant}>
			{children}
		</div>
	)
}

export default BigTitle
