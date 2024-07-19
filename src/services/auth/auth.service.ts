import {
	ILoginRequest,
	IRegisterRequest,
	ITokens
} from '@/shared/types/auth.interface'

import { API_URL } from '@/config/api.config'

import { request } from '../api/request.api'

export const AuthService = {
	async login({ email, password }: ILoginRequest) {
		return request<ITokens>({
			baseURL: API_URL,
			url: '/users/login/',
			method: 'POST',
			data: { email, password }
		})
	},
	async register({ email, password, firstname, lastname }: IRegisterRequest) {
		return request({
			baseURL: API_URL,
			url: '/users/registration/',
			method: 'POST',
			data: { email, password, firstname, lastname }
		})
	}
}
