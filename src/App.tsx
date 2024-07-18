import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useTheme } from '@/context/ThemeContext'

import '@/assets/styles/index.scss'

import '@/i18n'
import AppRouter from '@/router'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

function App() {
	const { theme } = useTheme()

	const themeClass = useMemo(() => (theme === 'light' ? '' : ' _dark'), [theme])

	return (
		<div className={'wrapper' + themeClass}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<AppRouter></AppRouter>
				</BrowserRouter>
			</QueryClientProvider>
		</div>
	)
}

export default App
