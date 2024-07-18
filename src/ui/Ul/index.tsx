import { FC, PropsWithChildren } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps {
	className?: string
	variant?: 'list-style-none'
}

const Ul: FC<PropsWithChildren<IProps>> = ({
	className,
	children,
	variant
}) => {
	const styleClassName = setClassName(className)
	const styleVariant = setClassName(styles[variant])

	return (
		<ul className={styles.ul + styleClassName + styleVariant}>{children}</ul>
	)
}

export default Ul
