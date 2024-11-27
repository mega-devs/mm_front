import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

interface ISetErrorMessage {
	formField: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
	t: any
}

export const setErrorMessage = ({ formField, t = null }: ISetErrorMessage) => {
	if (typeof t === 'function' && !formField?.message && formField?.type) {
		return t('form_' + formField?.type)
	}

	return formField?.message ? formField?.message : formField?.type
}
