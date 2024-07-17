import { FC, PropsWithChildren } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps {
	className?: string
}

const ButtonSmall: FC<PropsWithChildren<IProps>> = ({
	className,
	children
}) => {
	const styleClassName = setClassName(className)

	return <button className={styles.btn + styleClassName}>{children}</button>
}

export default ButtonSmall
