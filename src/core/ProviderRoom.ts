import { QuestionProps } from "./Question"
import { RoomProps } from "./Room"

export interface ProviderRoomProps {
	create(room: RoomProps): Promise<void>
	getQuestions(categorie: string): Promise<QuestionProps[]>
}

export class ProviderRoom {
	private _providerRoom: ProviderRoomProps

	constructor(provider: ProviderRoomProps) { this._providerRoom = provider }

	async create(room: RoomProps): Promise<void> {
		await this._providerRoom.create(room)
	}

	async getQuestions(categorie: string): Promise<QuestionProps[]>{
		const questions = this._providerRoom.getQuestions(categorie)

		return questions
	}
}
