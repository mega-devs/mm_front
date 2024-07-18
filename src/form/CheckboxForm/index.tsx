import { ComponentProps, FC, PropsWithChildren } from 'react'
import {
	FieldPath,
	FieldValues,
	RegisterOptions,
	UseFormRegister
} from 'react-hook-form'

import { Control } from '@/ui'
import stylesCheckbox from '@/ui/Checkbox/style.module.scss'
import { setClassName } from '@/utils/class'

interface IProps extends ComponentProps<'input'> {
	className?: string
	name: string
	variant?: 'arrow'
	label?: string
	register: UseFormRegister<any>
	rules?: Omit<
		RegisterOptions<FieldValues, FieldPath<FieldValues>>,
		'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
	>
	error?: string
}

const CheckboxForm: FC<PropsWithChildren<IProps>> = ({
	className,
	label,
	error = null,
	register,
	variant,
	name = '',
	rules = {},
	children,
	...other
}) => {
	const styleVariant = setClassName(stylesCheckbox[variant])

	return (
		<Control className={className} label={label} error={error}>
			<label className={stylesCheckbox.checkbox + styleVariant}>
				<input
					className={stylesCheckbox.checkbox__input}
					type='checkbox'
					{...register(name, rules)}
					{...other}
				/>
				<span className={stylesCheckbox.checkbox__icon}></span>
				<span>{children}</span>
			</label>
		</Control>
	)
}

export default CheckboxForm
