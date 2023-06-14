import { Percentage, User } from "./User"

export interface ProviderUserProps {
	loginGoogle(): Promise<User>
	loginPassword(email: string, password: string): Promise<User>
	createUserPassword(email: string, password: string): Promise<void>
	updateUser(user: User): Promise<void>
	getUser(user: User): Promise<User | false>
	getUserLogged(cookie: string): Promise<User>
	submitUser(user: User): Promise<void>
	submitPercentages(percentages: Percentage, email: string): Promise<void>
	getPercentages(email: string): Promise<Percentage>
	logout(): Promise<void>
}

export class ProviderUser {
	private _providerAuthentication: ProviderUserProps

	constructor(provider: ProviderUserProps) { this._providerAuthentication = provider }

	async loginGoogle(): Promise<User> {
		const user = await this._providerAuthentication.loginGoogle()

		return user
	}

	async loginPassword(email: string, password: string): Promise<User> {
		const user = await this._providerAuthentication.loginPassword(email, password)

		return user
	}

	async createUserPassword(email: string, password: string): Promise<void> {
		await this._providerAuthentication.createUserPassword(email, password)
	}

	async getUser(user: User): Promise<User | false> {
		const userReceived = await this._providerAuthentication.getUser(user)

		return userReceived
	}

	async submitUser(user: User): Promise<void> {
		await this._providerAuthentication.submitUser(user)
	}

	async submitPercentages(percentages: Percentage, email: string): Promise<void> {
		await this._providerAuthentication.submitPercentages(percentages, email)
	}

	async getPercentages(email: string): Promise<Percentage> {
		const percentages = await this._providerAuthentication.getPercentages(email)

		return percentages
	}

	async logout(): Promise<void> {
		await this._providerAuthentication.logout()
	}

	async getUserLogged(cookie: string): Promise<User> {
		const user = await this._providerAuthentication.getUserLogged(cookie)

		return user
	}

	async updateUser(user: User): Promise<void> {
		await this._providerAuthentication.updateUser(user)
	}
}
