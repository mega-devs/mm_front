import {
	FC,
	PropsWithChildren,
	createContext,
	useContext,
	useState
} from 'react'

const LanguageContext = createContext({
	popup: false,
	togglePopup: () => {}
})

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
	const [popup, setPopup] = useState(false)
	const togglePopup = () => {
		setPopup(!popup)
	}

	return (
		<LanguageContext.Provider value={{ popup, togglePopup }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => useContext(LanguageContext)
