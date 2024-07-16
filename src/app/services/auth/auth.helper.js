import Cookies from 'js-cookie'

export const getAccessToken = () => {
	return Cookies.get('access') || null
}

export const getRefreshToken = () => {
	return Cookies.get('refresh') || null
}

export const saveTokensStorage = data => {
	Cookies.set('access', data.accesstoken)
	Cookies.set('refresh', data.refreshtoken)
}

export const deleteTokensStorage = () => {
	Cookies.remove('access')
	Cookies.remove('refresh')
}

export const getUserFromStorage = () => {
	const storedUser = localStorage.getItem('user')
	return storedUser ? JSON.parse(storedUser) : null
}
