export interface ProviderQuestionProps {
	create(): Promise<void>
}

export class ProviderQuestion {
	private _providerRoom: ProviderQuestionProps

	constructor(provider: ProviderQuestionProps) { this._providerRoom = provider }

	async create(): Promise<void> {
		await this._providerRoom.create()
	}
}
