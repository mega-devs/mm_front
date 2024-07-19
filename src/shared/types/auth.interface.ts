export interface IUser {}

export enum EnumStore {
	ACCESS_TOKEN = 'access',
	REFRESH_TOKEN = 'refresh',
	USER = 'user'
}

export interface ITokens {
	access: string
	refresh: string
}

export interface ILoginRequest {
	email: string
	password: string
}

export interface IRegisterRequest {
	email: string
	password: string
	firstname: string
	lastname: string
}
