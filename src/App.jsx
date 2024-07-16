import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './i18n'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './app/router'
import './app/assets/styles/index.scss'
import { useTheme } from './app/context/ThemeContext'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

function App() {
	const { theme } = useTheme()

	const the = useMemo(() => (theme === 'light' ? '' : ' _dark'), [theme])

	return (
		<div className={'wrapper' + the}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<AppRouter></AppRouter>
				</BrowserRouter>
			</QueryClientProvider>
		</div>
	)
}

export default App
