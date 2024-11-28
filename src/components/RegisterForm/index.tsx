import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { CheckboxForm, InputForm } from '@/form'
import { ROUTE_NAMES } from '@/router'
import { Button, MyLink } from '@/ui'
import { setErrorMessage } from '@/utils/error'
import {
	equalFields,
	isValidPassword,
	regEmailPattern,
	regTelegramPattern
} from '@/utils/validate'
import styles from './style.module.scss'
import toast, { Toaster } from 'react-hot-toast'
import { request } from '@/services/api/request.api'

const RegisterForm = () => {
	const { t } = useTranslation()
	const notify = (notification: string) => toast(notification)

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm()

	const onSubmit = async values => {
		await request({
			url: 'http://{server_url}/register'
		})
			.then(() => notify('Account registered successfully.'))
			.catch(() =>
				notify('Error was occurred or account is already registered.')
			)
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
						error={setErrorMessage({ formField: errors.telegram, t })}
						rules={{
							required: false,
							pattern: {
								value: regTelegramPattern,
								message: t('form_telegram')
							}
						}}
						register={register}
						name='telegram'
						placeholder={t('formTelegram')}
					/>
					<InputForm
						className={styles.register_form__input}
						error={setErrorMessage({ formField: errors.password, t })}
						rules={{
							required: true,
							validate: {
								confirm: value =>
									isValidPassword(value, 5, t('form_weak_password'))
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
							validate: value =>
								equalFields(value, watch('password'), t('form_confirm'))
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
			<Button
				onSubmit={() => {
					console.log(123)
					notify('Account registered successfully')
				}}
			>
				{t('registerFormSubmit')}
			</Button>
			<div>
				{t('registerFormAlready')}{' '}
				<MyLink to={ROUTE_NAMES.login}>{t('logIn')}</MyLink>
			</div>
			<Toaster position='bottom-center' />
		</form>
	)
}

export default RegisterForm
