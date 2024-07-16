import { useMutation } from '@tanstack/react-query'
import { AuthService } from '../../app/services/auth/auth.service'
import { saveTokensStorage } from '../../app/services/auth/auth.helper'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
	const navigate = useNavigate()

	const { mutate: authSync } = useMutation(
		['auth'],
		data => AuthService.login(data),
		{
			onSuccess: data => {
				saveTokensStorage(data)
				navigate('/')
			}
		}
	)

	return {
		authSync
	}
}
