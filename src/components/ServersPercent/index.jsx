import { useEffect, useRef, useState } from 'react'
import { setClassName } from '../../app/utils/class'
import styles from './style.module.scss'

export default function ServersPercent({ percent, color }) {
	const colorVariant = setClassName(styles[color])
	const serversPercent = useRef()
	const [marginLeft, setMarginLeft] = useState()

	const widthUpdate = () => {
		setMarginLeft(serversPercent.current?.clientWidth / 2)
	}

	useEffect(() => {
		widthUpdate()
		window.addEventListener('resize', widthUpdate)

		return () => {
			window.removeEventListener('resize', widthUpdate)
		}
	}, [])

	return (
		<div className={styles.servers_percent + colorVariant} ref={serversPercent}>
			<div
				className={styles.servers_percent__line}
				style={{ width: percent + '%' }}
			>
				<span
					className={styles.servers_percent__line_text}
					style={{ marginLeft }}
				>
					{percent}%
				</span>
			</div>
			<div className={styles.servers_percent__count}>{percent}%</div>
		</div>
	)
}
