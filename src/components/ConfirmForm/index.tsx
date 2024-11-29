import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { InputForm } from '@/form'
import { Button } from '@/ui'

import styles from './style.module.scss'
import { regEmailPattern } from '@/utils/validate'
import { setErrorMessage } from '@/utils/error'

const ConfirmForm = () => {
	const { t } = useTranslation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const onSubmit = values => {
		console.log(values)
	}

	return (
		<form
			className={styles.confirm_form + ' style-block'}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div style={{ width: '100%' }}>
				<div className={styles.confirm_form__inputs + ' form-inputs'}>
					<InputForm
						className={styles.confirm_form__input}
						error={setErrorMessage({ formField: errors.email, t })}
						rules={{
							required: true,
							pattern: {
								value: regEmailPattern,
								message: t('form_email')
							}
						}}
						register={register}
						name='email'
						placeholder={t('formEmail')}
					/>
					<InputForm
						className={styles.confirm_form__input}
						error={errors.password?.type}
						rules={{
							required: true
						}}
						register={register}
						name='password'
						type='password'
						placeholder={t('formPassword')}
					/>
				</div>
			</div>
			<Button>{t('confirmFormSubmit')}</Button>
		</form>
	)
}

export default ConfirmForm
