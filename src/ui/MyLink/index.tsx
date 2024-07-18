import { FC, PropsWithChildren } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import styles from './style.module.scss'

interface IProps extends LinkProps {
	withArrow?: boolean
}

const MyLink: FC<PropsWithChildren<IProps>> = ({
	children,
	withArrow = false,
	...other
}) => {
	return (
		<Link className={styles.link + ' word-break'} {...other}>
			<span className={styles.link__children}>{children}</span>
			{withArrow && (
				<svg
					className={styles.link__arrow}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='var(--first-color)'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M9.5 7L14.5 12L9.5 17'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)}
		</Link>
	)
}

export default MyLink
