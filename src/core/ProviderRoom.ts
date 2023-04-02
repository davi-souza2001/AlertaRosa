import { QuestionProps } from "./Question"
import { RoomProps } from "./Room"
import { User } from "./User"

export interface ProviderRoomProps {
	create(room: RoomProps): Promise<void>
	sendResult(result: string, user: User): Promise<void>
	getQuestions(): Promise<QuestionProps[]>
}

export class ProviderRoom {
	private _providerRoom: ProviderRoomProps

	constructor(provider: ProviderRoomProps) { this._providerRoom = provider }

	async create(room: RoomProps): Promise<void> {
		await this._providerRoom.create(room)
	}

	async sendResult(result: string, user: User): Promise<void> {
		await this._providerRoom.sendResult(result, user)
	}

	async getQuestions(): Promise<QuestionProps[]> {
		const questions = this._providerRoom.getQuestions()

		return questions
	}
}
