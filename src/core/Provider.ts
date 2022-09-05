import { User } from "./User";

export interface ProviderProps {
	loginGoogle(): Promise<User>
	getUser(): Promise<User | void>
	submitUser(user: User): Promise<void>
	logout(): Promise<void>
}

export default class Provider {
	private _providerAuthentication: ProviderProps

	constructor(provider: ProviderProps) { this._providerAuthentication = provider }

	async loginGoogle(): Promise<User> {
		const user = await this._providerAuthentication.loginGoogle()

		return user
	}

	async getUser(): Promise<User | void> {
		const user = await this._providerAuthentication.getUser()

		return user
	}

	async submitUser(user: User): Promise<void> {
		await this._providerAuthentication.submitUser(user)
	}

	async logout(): Promise<void> {
		await this._providerAuthentication.logout()
	}
}
