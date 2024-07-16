import instance from './interceptors.api'

export const request = async config => {
	const onSuccess = response => response.data

	const onError = error => {
		console.error('Request error: ', error)

		return Promise.reject(error)
	}

	return instance(config).then(onSuccess).catch(onError)
}
