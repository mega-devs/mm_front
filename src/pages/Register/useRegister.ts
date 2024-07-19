import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '@/services/auth/auth.service'
import { IRegisterRequest } from '@/shared/types/auth.interface'

export const useRegister = () => {
	const navigate = useNavigate()

	const { mutate: registerSync, error } = useMutation(
		['auth'],
		(data: IRegisterRequest) => AuthService.register(data),
		{
			onSuccess: () => {
				navigate('/login')
			}
		}
	)

	return {
		registerSync,
		error
	}
}
