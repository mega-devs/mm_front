import Cookies from 'js-cookie'

import { EnumStore, ITokens } from '@/shared/types/auth.interface'

export const getAccessToken = () => {
	return Cookies.get(EnumStore.ACCESS_TOKEN) || null
}

export const getRefreshToken = () => {
	return Cookies.get(EnumStore.REFRESH_TOKEN) || null
}

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set(EnumStore.ACCESS_TOKEN, data.access)
	Cookies.set(EnumStore.REFRESH_TOKEN, data.refresh)
}

export const deleteTokensStorage = () => {
	Cookies.remove(EnumStore.ACCESS_TOKEN)
	Cookies.remove(EnumStore.REFRESH_TOKEN)
}

export const getUserFromStorage = () => {
	const storedUser = localStorage.getItem(EnumStore.USER)
	return storedUser ? JSON.parse(storedUser) : null
}
