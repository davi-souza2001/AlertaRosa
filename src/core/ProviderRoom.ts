import { QuestionProps } from "./Question"
import { playProps, RoomProps } from "./Room"

export interface ProviderRoomProps {
	create(room: RoomProps, leader: string): Promise<void>
	getRoom(id: string): Promise<RoomProps>
	joinRoom(id: string, user: playProps): Promise<void>
	startGame(email: string): Promise<void>
	getQuestion(room: RoomProps): Promise<void>
	nextQuestion(email: string): Promise<void>
}

export class ProviderRoom {
	private _providerAuthentication: ProviderRoomProps

	constructor(provider: ProviderRoomProps) { this._providerAuthentication = provider }

	async create(room: RoomProps, leader: string): Promise<void> {
		await this._providerAuthentication.create(room, leader)
	}

	async getRoom(id: string): Promise<RoomProps> {
		const room = await this._providerAuthentication.getRoom(id)

		return room
	}

	async joinRoom(id: string, user: playProps): Promise<void> {
		await this._providerAuthentication.joinRoom(id, user)
	}

	async startGame(email: string): Promise<void> {
		await this._providerAuthentication.startGame(email)
	}

	async getQuestion(room: RoomProps): Promise<void> {
		await this._providerAuthentication.getQuestion(room)
	}

	async nextQuestion(email: string): Promise<void> {
		await this._providerAuthentication.nextQuestion(email)
	}
}
