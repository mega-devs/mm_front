import { useTranslation } from 'react-i18next'

import { LoginForm } from '@/components'
import ClientLayout from '@/layout/ClientLayout'
import { Title } from '@/ui'

import styles from './style.module.scss'
import { useLogin } from './useLogin'

const Login = () => {
	const { authSync } = useLogin()
	const { t } = useTranslation()

	const onSubmit = data => {
		if (data) {
			authSync({ email: data.email, password: data.password })
		}
	}

	return (
		<ClientLayout>
			<div className='container'>
				<div className={styles.login}>
					<Title>{t('loginTitle')}</Title>
					<div className={styles.login__content}>
						<LoginForm onSubmit={onSubmit} />
						<img
							className={styles.login__img}
							src='/images/Art 2 1.png'
							alt=''
							width={661}
						/>
					</div>
				</div>
			</div>
		</ClientLayout>
	)
}

export default Login
