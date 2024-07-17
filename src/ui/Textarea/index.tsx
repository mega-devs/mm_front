import { ComponentProps, FC, PropsWithChildren } from 'react'

import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

interface IProps extends ComponentProps<'textarea'> {
	className?: string
}

const Textarea: FC<PropsWithChildren<IProps>> = ({
	className,
	children,
	...other
}) => {
	const styleClassName = setClassName(className)

	return (
		<textarea className={styles.textarea + styleClassName} {...other}>
			{children}
		</textarea>
	)
}

export default Textarea
