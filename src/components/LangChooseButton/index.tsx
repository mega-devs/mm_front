import React, { FC, useEffect, useRef } from 'react'
import { Lang } from '@/icons'
import { useTranslation } from 'react-i18next'
import styles from './style.module.scss'

interface ILangChooseButtonProps {
	items: { title: string }[]
}

const LangChooseButton: FC<ILangChooseButtonProps> = ({ items }) => {
	const dropdownRef = useRef<HTMLDivElement>(null)
	const [active, setActive] = React.useState<boolean>(false)
	const { t, i18n } = useTranslation()

	const toggle = () => setActive(!active)

	const handleClickOutSide = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		)
			setActive(false)
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutSide)
		return () => {
			document.removeEventListener('click', handleClickOutSide)
		}
	}, [])

	return (
		<div ref={dropdownRef} className={styles.item} onClick={toggle}>
			<Lang />
			{t('lang')}
			{active && (
				<div className={styles.dropDown}>
					<ul className={styles.list}>
						{items.map(item => (
							<li
								onClick={() => {
									i18n
										.changeLanguage(item.title.toLowerCase())
										.then(r => console.log(r))
								}}
								className={styles.li}
							>
								{item.title}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default LangChooseButton
