import styles from './style.module.scss'

export default function Checkbox({
	children,
	type,
	checked,
	onChange,
	...other
}) {
	return (
		<label className={styles.checkbox}>
			<input
				className={styles.checkbox__input}
				type='checkbox'
				{...other}
				checked={checked}
				onChange={event => onChange(event.target.checked)}
			/>
			<span className={styles.checkbox__icon}></span>
			<span className={styles.checkbox__name}>{children}</span>
		</label>
	)
}
