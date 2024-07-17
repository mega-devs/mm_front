import ReactDOM from 'react-dom/client'

import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<LanguageProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</LanguageProvider>
)
