import { FC, PropsWithChildren } from 'react'

import { Footer, Header } from '@/components'

import styles from './style.module.scss'

const ClientLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	)
}

export default ClientLayout
