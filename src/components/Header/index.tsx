import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { HeaderNav } from '@/components'
import { useTheme } from '@/context/ThemeContext'
import { Logo, Theme } from '@/icons'
import { ROUTE_NAMES } from '@/router'
import { Button } from '@/ui'
import { setClassName } from '@/utils/class'

import styles from './style.module.scss'
import {
	deleteTokensStorage,
	getRefreshToken
} from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import LangChooseButton from '@/components/LangChooseButton'

const Header = () => {
	const [isAuth, setIsAuth] = useState(false)
	const refreshToken = getRefreshToken()
	const { t } = useTranslation()
	const { theme, toggleTheme } = useTheme()

	const [active, setActive] = useState(false)

	const activeClassName = useMemo(() => {
		if (active) return setClassName(styles.active)

		return ''
	}, [active])

	useEffect(() => {
		refreshToken ? setIsAuth(true) : setIsAuth(false)
	}, [refreshToken])

	const logout = () => {
		AuthService.logout(refreshToken).then(() => {
			setIsAuth(false)
			deleteTokensStorage()
		})
	}

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__container}>
					<Link to={ROUTE_NAMES.main}>
						<Logo className={styles.header__logo} />
					</Link>
					<div
						className={styles.header__burger}
						onClick={() => setActive(true)}
					>
						<span className={styles.header__burger_line}></span>
					</div>
					<div className={styles.header__menu + activeClassName}>
						<div
							className={styles.header__menu_close}
							onClick={() => setActive(false)}
						></div>
						<HeaderNav />
						<div className={styles.header__actions}>
							{/*<div className={styles.header__action}>*/}
							{/*	<Lang />*/}
							{/*	{t('lang')}*/}
							{/*</div>*/}
							<LangChooseButton />
							<div onClick={toggleTheme} className={styles.header__action}>
								<Theme />
								{theme === 'light' ? t('theme_dark') : t('theme_light')}
							</div>
							<div className={styles.header__buttons}>
								{isAuth ? (
									<Button className={styles.header__button} onClick={logout}>
										{t('logOut')}
									</Button>
								) : (
									<>
										<Link to={ROUTE_NAMES.login}>
											<Button
												className={styles.header__button}
												variant='outlined'
											>
												{t('logIn')}
											</Button>
										</Link>
										<Link to={ROUTE_NAMES.register}>
											<Button className={styles.header__button}>
												{t('signUp')}
											</Button>
										</Link>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
