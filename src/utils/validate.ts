export const regEmailPattern = /\S+@\S+\.\S+/
const upperLetters = /[А-ЯA-Z]/
const lowerLetters = /[а-яa-z]/
const digits = /[0-9]/
export const regTelegramPattern = /@+\w/
export const equalFields = (firsValue, secondValue, error) => {
	return firsValue === secondValue ? true : error
}

export const isValidPassword = (password: string, reqLength: number, error) => {
	let arr = Array.from(password)
	return password.length > reqLength &&
		arr.some(x => upperLetters.test(x)) &&
		arr.some(x => lowerLetters.test(x)) &&
		arr.some(x => digits.test(x)) ? true : error;
}