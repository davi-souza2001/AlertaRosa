import { Question } from "./Question"
import { RoomProps } from "./Room"

export interface ProviderRoomProps {
	create(room: RoomProps, leader: string): Promise<void>
	sign(id: string): Promise<any>
	handleAnswerQuestion(question: Question): Promise<void>
	result(): Promise<void>
}

export class ProviderRoom {
	private _providerAuthentication: ProviderRoomProps

	constructor(provider: ProviderRoomProps) { this._providerAuthentication = provider }

	async create(room: RoomProps, leader: string): Promise<void> {
		await this._providerAuthentication.create(room, leader)
	}

	async sign(id: string): Promise<RoomProps> {
		const exists = await this._providerAuthentication.sign(id)

		return exists
	}

	async handleAnswerQuestion(question: Question): Promise<void> {
		await this._providerAuthentication.handleAnswerQuestion(question)
	}

	async result(): Promise<void> {
		await this._providerAuthentication.result()
	}
}
