import { User } from "./User";

export interface ProviderProps {
	loginGoogle(): Promise<User>
	logout(): Promise<void>
}

export default class Provider {
	private _providerAuthentication: ProviderProps

	constructor(provider: ProviderProps) { this._providerAuthentication = provider }

	async loginGoogle(): Promise<User> {
		const user = await this._providerAuthentication.loginGoogle()

		return user
	}

	async logout(): Promise<void> {
		await this._providerAuthentication.logout()
	}
}
