import { ITokens } from '@/shared/types/auth.interface'

import { API_URL } from '@/config/api.config'

import { request } from '../api/request.api'

export const AuthService = {
	async login({ email, password }: { email: string; password: string }) {
		return request<ITokens>({
			baseURL: API_URL,
			url: '/users/login/',
			method: 'POST',
			data: { email, password }
		})
	}
}
