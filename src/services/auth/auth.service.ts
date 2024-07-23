import { ITokens } from '@/shared/types/auth.interface'

import { API_URL } from '@/config/api.config'

import { request } from '../api/request.api'
import instance from '@/services/api/interceptors.api'

export const AuthService = {
	async login({ email, password }: { email: string; password: string }) {
		return request<ITokens>({
			baseURL: API_URL,
			url: '/users/login/',
			method: 'POST',
			data: { email, password }
		})
	},
	async logout(refresh: string) {
		return request<ITokens>({
			baseURL: API_URL,
			url: '/users/logout/',
			method: 'POST',
			data: { refresh }
		})
	},
	async refreshTokens(refresh: string) {
		return instance<ITokens>({
			baseURL: API_URL,
			url: '/users/token_refresh/',
			method: 'POST',
			data: { refresh }
		})
	}
}
