import axios from 'axios'

import { API_URL } from '@/config/api.config'
import { getAccessToken } from '@/services/auth/auth.helper'

const instance = axios.create({
	baseURL: API_URL
})

instance.interceptors.request.use(async config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	config => config,
	error => {
		const originalRequest = error.config
		const hasError =
			error.response?.status === 401 && error.config && !error.config._isRetry

		/*if (errorCatch(error) === 'token_not_valid' && refreshToken) {
			AuthService.refreshTokens(refreshToken)
				.then(response => saveTokensStorage(response.data))
				.catch(() => deleteTokensStorage())
		}*/

		if (hasError) {
			originalRequest._isRetry = true
			return instance.request(originalRequest)
		}

		throw error
	}
)

export default instance
