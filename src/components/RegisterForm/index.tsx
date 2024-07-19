import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { CheckboxForm, InputForm } from '@/form'
import { ROUTE_NAMES } from '@/router'
import { Button, MyLink } from '@/ui'
import { setErrorMessage } from '@/utils/error'
import { equalFields, regEmailPattern } from '@/utils/validate'

import styles from './style.module.scss'
import { FC } from 'react'
import { IRegisterRequest } from '@/shared/types/auth.interface'

interface IProps {
	onSubmit: (data: IRegisterRequest) => void
}

const RegisterForm: FC<IProps> = ({ onSubmit }) => {
	const { t } = useTranslation()

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm()

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
								required: true
							}}
							register={register}
							name='firstname'
							placeholder={t('formFirstName')}
						/>
						<InputForm
							className={styles.register_form__input}
							error={setErrorMessage({ formField: errors.lastName, t })}
							rules={{ required: true }}
							register={register}
							name='lastname'
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
							minLength: {
								value: 8,
								message: t('form_minLength', {
									min: 8
								})
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
							required: true,
							validate: {
								confirm: value =>
									equalFields(value, watch('password'), t('form_confirm'))
							}
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
			<Button>{t('registerFormSubmit')}</Button>
			<div>
				{t('registerFormAlready')}{' '}
				<MyLink to={ROUTE_NAMES.login}>{t('logIn')}</MyLink>
			</div>
		</form>
	)
}

export default RegisterForm
