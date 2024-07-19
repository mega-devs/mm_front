import { useTranslation } from 'react-i18next'

import { RegisterForm } from '@/components'
import ClientLayout from '@/layout/ClientLayout'
import { Title } from '@/ui'

import styles from './style.module.scss'
import { useRegister } from './useRegister'
import { IRegisterRequest } from '@/shared/types/auth.interface'

const Register = () => {
	const { registerSync } = useRegister()
	const { t } = useTranslation()

	const onSubmit = (data: IRegisterRequest) => {
		if (data) {
			registerSync({
				email: data.email,
				password: data.password,
				firstname: data.firstname,
				lastname: data.lastname
			})
		}
	}

	return (
		<ClientLayout>
			<div className='container'>
				<div className={styles.register}>
					<Title>{t('registerTitle')}</Title>
					<div className={styles.register__content}>
						<RegisterForm onSubmit={onSubmit} />
						<img
							className={styles.register__img}
							src='/images/Art 2 2.png'
							alt=''
							width={661}
						/>
					</div>
				</div>
			</div>
		</ClientLayout>
	)
}

export default Register
