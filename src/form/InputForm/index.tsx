import { ComponentProps, FC, ReactNode } from 'react'
import {
	FieldError,
	FieldErrorsImpl,
	FieldPath,
	FieldValues,
	Merge,
	RegisterOptions,
	UseFormRegister
} from 'react-hook-form'

import { Control } from '@/ui'
import stylesInput from '@/ui/Input/style.module.scss'

import styles from './style.module.scss'

interface IProps extends ComponentProps<'input'> {
	className?: string
	error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
	rules?: Omit<
		RegisterOptions<FieldValues, FieldPath<FieldValues>>,
		'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
	>
	register: UseFormRegister<any>
	name: string
	placeholder?: string
	label?: string
	icon?: ReactNode
}

const InputForm: FC<IProps> = ({
	className,
	label,
	error,
	register,
	name = '',
	rules = {},
	icon,
	...other
}) => {
	return (
		<Control className={className} label={label} error={error}>
			<span className={styles.field}>
				<input
					className={stylesInput.input}
					{...register(name, rules)}
					{...other}
				/>
				{icon}
			</span>
		</Control>
	)
}

export default InputForm
