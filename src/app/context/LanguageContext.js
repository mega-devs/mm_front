import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext({
	popup: false,
	togglePopup: () => {}
})

export const LanguageProvider = ({ children }) => {
	const [popup, setPopup] = useState(false)
	const togglePopup = () => {
		setPopup(!popup)
		console.log('toggle', popup)
	}
	return (
		<LanguageContext.Provider value={{ popup, togglePopup }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => useContext(LanguageContext)
