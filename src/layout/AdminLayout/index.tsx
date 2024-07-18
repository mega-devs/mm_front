import { FC, PropsWithChildren } from 'react'

import { AdminHeader, Footer } from '@/components'

import styles from './style.module.scss'

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<AdminHeader />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	)
}

export default AdminLayout
