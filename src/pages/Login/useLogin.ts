import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { saveTokensStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import { ILoginRequest } from '@/shared/types/auth.interface'

export const useLogin = () => {
	const navigate = useNavigate()

	const { mutate: authSync } = useMutation(
		['auth'],
		(data: ILoginRequest) => AuthService.login(data),
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
