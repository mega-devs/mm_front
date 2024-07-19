import { AxiosRequestConfig, AxiosResponse } from 'axios'

import instance from './interceptors.api'
import { errorCatch, TErrorCatch } from './error.api'

export const request = async <T>(config: AxiosRequestConfig) => {
	const onSuccess = (response: AxiosResponse<T>) => response.data

	const onError = (error: T) => {
		errorCatch(error as TErrorCatch)
		console.error('Request error: ', error)

		return Promise.reject(error)
	}

	return instance(config).then(onSuccess).catch(onError)
}
