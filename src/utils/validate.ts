export const regEmailPattern = /\S+@\S+\.\S+/
const upperLetters = /[А-ЯA-Z]/
const lowerLetters = /[а-яa-z]/
const digits = /[0-9]/

export const equalFields = (firsValue, secondValue, error) => {
	return firsValue === secondValue ? true : error
}

export const isValidPassword = (password: string, reqLength: number) => {
	let arr = Array.from(password)
	return password.length > reqLength &&
		arr.some(x => upperLetters.test(x)) &&
		arr.some(x => lowerLetters.test(x)) &&
		arr.some(x => upperLetters.test(x));
}
