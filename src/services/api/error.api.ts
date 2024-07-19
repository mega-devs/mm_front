import { AxiosError } from 'axios'

type TErrorDetail = {
	string: string
	code: string
}

type TErrorResponse = {
	detail?: string | string[]
	message?: string
	error?: Record<string, TErrorDetail[] | TErrorResponse>
}

export type TErrorCatch = AxiosError<TErrorResponse | string | undefined>

const formatErrorMessage = (errorObj: Record<string, any>): string => {
	return Object.entries(errorObj)
		.map(([key, value]) => {
			delete value['code']
			if (Array.isArray(value)) {
				return `${value.map(v => v.string).join(', ')}`
			}
			if (typeof value === 'object' && value !== null) {
				return `${formatErrorMessage(value)}`
			}
			return `${value}`
		})
		.join('\n')
}

const convertToJSONObject = (str: string): object => {
	let jsonString = str.replace(/'/g, '"')
	console.log(jsonString)
	jsonString = jsonString
		.replace(/ErrorDetail\(/g, '{')
		.replace(/\)/g, '}')
		.replaceAll('=', ':')
		.replaceAll('[', '')
		.replaceAll(']', '')
		.replaceAll('string', '"string"')
		.replaceAll('code', '"code"')
	console.log(jsonString)

	try {
		const jsonObject = JSON.parse(jsonString)
		return jsonObject
	} catch (e) {
		// return str
	}
}

export const errorCatch = (error: TErrorCatch): string | null => {
	let message = error?.response?.data

	if (typeof message === 'string') {
		try {
			// @ts-ignore
			message = JSON.parse(message.error.replace(/'/g, '"'))
		} catch (e) {
			return message.toString()
		}
	}

	const errorText =
		typeof message === 'string'
			? message
			: typeof message?.detail === 'string'
			? message.detail
			: Array.isArray(message?.detail)
			? message.detail.join(', ')
			: typeof message?.error === 'string'
			? message.error
			: typeof message?.error === 'object' && message?.error !== null
			? formatErrorMessage(message.error)
			: error.message
	// console.log(formatErrorMessage(convertToJSONObject(message.error)))
	console.log(errorText)
	return errorText
}
