import { request } from '../api/request.api'
import { API_URL } from '../../config/api.config'

export const AuthService = {
	async login({ email, password }) {
		return request({
			baseURL: API_URL,
			url: '/users/login/',
			method: 'POST',
			data: { email, password }
		})
	}
}
