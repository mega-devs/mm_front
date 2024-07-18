import { ComponentProps, FC, PropsWithChildren } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { Control } from '@/ui'
import stylesInput from '@/ui/Textarea/style.module.scss'

import styles from './style.module.scss'

interface IProps extends ComponentProps<'textarea'> {
	className?: string
	rows?: number
	error?: string
	register: UseFormRegister<any>
	name: string
	label: string
}

const TextareaForm: FC<PropsWithChildren<IProps>> = ({
	label,
	error,
	register,
	className,
	children,
	name = '',
	...other
}) => {
	return (
		<Control className={className} label={label} error={error}>
			<span className={styles.field}>
				<textarea
					className={stylesInput.textarea}
					{...register(name)}
					{...other}
				>
					{children}
				</textarea>
			</span>
		</Control>
	)
}

export default TextareaForm
