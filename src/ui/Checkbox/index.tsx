import { FC, PropsWithChildren } from 'react'

import styles from './style.module.scss'

interface IProps {
	checked: boolean
	onChange: (value: boolean) => void
}

const Checkbox: FC<PropsWithChildren<IProps>> = ({
	children,
	checked,
	onChange
}) => {
	return (
		<label className={styles.checkbox}>
			<input
				className={styles.checkbox__input}
				type='checkbox'
				checked={checked}
				onChange={event => onChange(event.target.checked)}
			/>
			<span className={styles.checkbox__icon}></span>
			<span>{children}</span>
		</label>
	)
}

export default Checkbox
