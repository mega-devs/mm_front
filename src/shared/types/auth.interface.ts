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
