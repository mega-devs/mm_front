import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import { Logo } from '@/icons'
import { ROUTE_NAMES } from '@/router'
import { setClassName } from '@/utils/class'

import styles from './style.module.scss'

const AdminHeader = () => {
	const { t } = useTranslation()

	const location = useLocation()

	const [active, setActive] = useState(false)

	const activeClassName = useMemo(() => {
		if (active) return setClassName(styles.active)

		return ''
	}, [active])

	const menu = [
		{
			link: ROUTE_NAMES.smpt,
			name: t('headerAdminLinkSMPT')
		},
		{
			link: ROUTE_NAMES.proxy,
			name: t('headerAdminLinkProxy')
		},
		{
			link: ROUTE_NAMES.mailing,
			name: t('headerAdminLinkMailing')
		},
		{
			link: ROUTE_NAMES.imap,
			name: t('headerAdminLinkIMAP')
		},
		{
			link: '/',
			name: t('headerAdminLinkSessionCampaign')
		},
		{
			link: '/',
			name: t('headerAdminLinkEmailbaseTable')
		},
		{
			link: '/',
			name: t('headerAdminLinkProxyTable')
		}
	]

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__top}>
					<Link to={ROUTE_NAMES.main}>
						<Logo />
					</Link>
					<div className={styles.header__application}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='var(--third-color)'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M9.11556 1.60944C4.9833 1.60944 1.61719 4.97554 1.61719 9.10782C1.61719 13.2401 4.9833 16.6127 9.11556 16.6127C10.8806 16.6127 12.5038 15.9942 13.7868 14.9672L16.9102 18.0889C17.0678 18.24 17.2783 18.3234 17.4966 18.3211C17.715 18.3189 17.9237 18.2313 18.0782 18.077C18.2327 17.9227 18.3207 17.7141 18.3232 17.4958C18.3257 17.2775 18.2427 17.0668 18.0918 16.909L14.9684 13.7856C15.9963 12.5007 16.6156 10.8749 16.6156 9.10782C16.6156 4.97554 13.2478 1.60944 9.11556 1.60944ZM9.11556 3.27613C12.3471 3.27613 14.9473 5.87629 14.9473 9.10782C14.9473 12.3393 12.3471 14.946 9.11556 14.946C5.88403 14.946 3.28385 12.3393 3.28385 9.10782C3.28385 5.87629 5.88403 3.27613 9.11556 3.27613Z' />
						</svg>
						<span className={styles.header__notification}>
							<svg
								width='20'
								height='20'
								fill='none'
								stroke='var(--third-color)'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M7.91667 16.6667C7.91667 16.6667 8.33333 17.5 10 17.5C11.6667 17.5 12.0833 16.6667 12.0833 16.6667M14.5833 9.16667V7.08333C14.5833 4.55203 12.5313 2.5 10 2.5C7.46869 2.5 5.41667 4.55203 5.41667 7.08333V9.16667L4.44036 10.143C3.99833 10.585 3.75 11.1845 3.75 11.8096C3.75 13.1114 4.80527 14.1667 6.10702 14.1667H13.893C15.1947 14.1667 16.25 13.1114 16.25 11.8096C16.25 11.1845 16.0017 10.585 15.5596 10.143L14.5833 9.16667Z'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							{t('headerAdminNotifications')}
						</span>
						<div className={styles.header__profile}>
							<div className={styles.header__profile_online}></div>
							<span>D</span>
						</div>
					</div>
					<div
						className={styles.header__burger}
						onClick={() => setActive(true)}
					>
						<span className={styles.header__burger_line}></span>
					</div>
				</div>
				<div className={styles.header__bottom + activeClassName}>
					<div
						className={styles.header__bottom_close}
						onClick={() => setActive(false)}
					></div>
					<div className={styles.header__links}>
						{menu.map((item, i) => (
							<Link
								key={i}
								className={
									styles.header__link +
									(location?.pathname === item.link ? ' ' + styles.active : '')
								}
								to={item.link}
							>
								{item.name}
							</Link>
						))}
					</div>
					<div className={styles.header__application + ' ' + styles._mobile}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='var(--third-color)'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M9.11556 1.60944C4.9833 1.60944 1.61719 4.97554 1.61719 9.10782C1.61719 13.2401 4.9833 16.6127 9.11556 16.6127C10.8806 16.6127 12.5038 15.9942 13.7868 14.9672L16.9102 18.0889C17.0678 18.24 17.2783 18.3234 17.4966 18.3211C17.715 18.3189 17.9237 18.2313 18.0782 18.077C18.2327 17.9227 18.3207 17.7141 18.3232 17.4958C18.3257 17.2775 18.2427 17.0668 18.0918 16.909L14.9684 13.7856C15.9963 12.5007 16.6156 10.8749 16.6156 9.10782C16.6156 4.97554 13.2478 1.60944 9.11556 1.60944ZM9.11556 3.27613C12.3471 3.27613 14.9473 5.87629 14.9473 9.10782C14.9473 12.3393 12.3471 14.946 9.11556 14.946C5.88403 14.946 3.28385 12.3393 3.28385 9.10782C3.28385 5.87629 5.88403 3.27613 9.11556 3.27613Z' />
						</svg>
						<span className={styles.header__notification}>
							<svg
								width='20'
								height='20'
								fill='none'
								stroke='var(--third-color)'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M7.91667 16.6667C7.91667 16.6667 8.33333 17.5 10 17.5C11.6667 17.5 12.0833 16.6667 12.0833 16.6667M14.5833 9.16667V7.08333C14.5833 4.55203 12.5313 2.5 10 2.5C7.46869 2.5 5.41667 4.55203 5.41667 7.08333V9.16667L4.44036 10.143C3.99833 10.585 3.75 11.1845 3.75 11.8096C3.75 13.1114 4.80527 14.1667 6.10702 14.1667H13.893C15.1947 14.1667 16.25 13.1114 16.25 11.8096C16.25 11.1845 16.0017 10.585 15.5596 10.143L14.5833 9.16667Z'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default AdminHeader
