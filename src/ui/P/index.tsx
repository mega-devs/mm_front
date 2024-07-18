import { ComponentProps, FC, PropsWithChildren } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps extends ComponentProps<'p'> {
	className?: string
}

const P: FC<PropsWithChildren<IProps>> = ({
	className,
	children,
	...other
}) => {
	const styleClassName = setClassName(className)

	return (
		<p className={styles.p + styleClassName} {...other}>
			{children}
		</p>
	)
}

export default P
