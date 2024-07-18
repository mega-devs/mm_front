import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { CheckboxForm, InputForm } from '@/form'
import { ROUTE_NAMES } from '@/router'
import { Button, MyLink } from '@/ui'
import { setErrorMessage } from '@/utils/error'
import { equalFields, regEmailPattern } from '@/utils/validate'

import styles from './style.module.scss'

const RegisterForm = () => {
	const { t } = useTranslation()

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm()

	const onSubmit = values => {
		console.log(values)
	}

	return (
		<form
			className={styles.register_form + ' style-block'}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div>
				<div className={styles.register_form__inputs + ' form-inputs'}>
					<div className='form-inputs__many'>
						<InputForm
							className={styles.register_form__input}
							error={setErrorMessage({ formField: errors.firstName, t })}
							rules={{
								required: true,
								minLength: {
									value: 5,
									message: t('form_minLength', {
										min: 5
									})
								}
							}}
							register={register}
							name='firstName'
							placeholder={t('formFirstName')}
						/>
						<InputForm
							className={styles.register_form__input}
							error={setErrorMessage({ formField: errors.lastName, t })}
							rules={{ required: true, minLength: 10 }}
							register={register}
							name='lastName'
							placeholder={t('formLastName')}
						/>
					</div>
					<InputForm
						className={styles.register_form__input}
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
						className={styles.register_form__input}
						error={setErrorMessage({ formField: errors.password, t })}
						rules={{
							required: true,
							validate: {
								confirm: value =>
									equalFields(
										value,
										watch('passwordConfirm'),
										t('form_confirm')
									)
							}
						}}
						register={register}
						name='password'
						type='password'
						placeholder={t('formPassword')}
					/>
					<InputForm
						className={styles.register_form__input}
						error={setErrorMessage({ formField: errors.passwordConfirm, t })}
						rules={{
							required: true
						}}
						register={register}
						name='passwordConfirm'
						type='password'
						placeholder={t('formPasswordConfirm')}
					/>
				</div>
				<div className={styles.register_form__checkboxs}>
					<CheckboxForm
						name='understand'
						error={setErrorMessage({ formField: errors.understand, t })}
						rules={{ required: true }}
						register={register}
					>
						{t('registerFormCheckbox1')}
					</CheckboxForm>
					<CheckboxForm
						name='terms'
						error={setErrorMessage({ formField: errors.terms, t })}
						rules={{ required: true }}
						register={register}
					>
						{t('registerFormCheckbox2')}
					</CheckboxForm>
				</div>
			</div>
			<Button onClick={() => console.log(errors)}>
				{t('registerFormSubmit')}
			</Button>
			<div>
				{t('registerFormAlready')}{' '}
				<MyLink to={ROUTE_NAMES.login}>{t('logIn')}</MyLink>
			</div>
		</form>
	)
}

export default RegisterForm
