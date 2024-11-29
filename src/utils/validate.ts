export const regEmailPattern = /\S+@\S+\.\S+/
const regPassword = /[А-ЯA-Zа-яa-z0-9]/
export const regTelegramPattern = /@+\w/

export const equalFields = (firsValue, secondValue, error) => {
	return firsValue === secondValue ? true : error
}

export const isValidPassword = (password: string, reqLength: number, error) => {
	let arr = Array.from(password)
	return password.length > reqLength && arr.some(x => regPassword.test(x))
		? true
		: error
}
