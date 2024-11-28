import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { InputForm } from '@/form'
import { ROUTE_NAMES } from '@/router'
import { Button, Checkbox, MyLink } from '@/ui'

import styles from './style.module.scss'
import { regEmailPattern } from '@/utils/validate'

const LoginForm = ({ onSubmit }) => {
	const { t } = useTranslation()
	const [checked, setChecked] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	return (
		<form
			className={styles.login_form + ' style-block'}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div>
				<div className={styles.login_form__inputs + ' form-inputs'}>
					<InputForm
						className={styles.login_form__input}
						error={errors.email?.message}
						rules={{
							required: { value: true, message: 'Email required' },
							pattern: { value: regEmailPattern, message: 'Incorrect email' }
						}}
						register={register}
						name='email'
						placeholder={t('formEmail')}
					/>
					<InputForm
						className={styles.login_form__input}
						error={errors.password?.message}
						rules={{
							required: { value: true, message: 'Password required' },
							minLength: { value: 1, message: 'Min Length 8' }
						}}
						type="password"
						register={register}
						name='password'
						placeholder={t('formPassword')}
					/>
					<p>{t('loginForgot')}</p>
					<Checkbox checked={checked} onChange={setChecked}>
						{t('loginFormCheckbox1')}
					</Checkbox>
				</div>
			</div>
			<Button onClick={() => {}} disabled={!checked}>{t('logIn')}</Button>
			<div>
				{t('loginDontAccount')}{' '}
				<MyLink to={ROUTE_NAMES.register}>{t('loginRegister')}</MyLink>
			</div>
		</form>
	)
}

export default LoginForm
