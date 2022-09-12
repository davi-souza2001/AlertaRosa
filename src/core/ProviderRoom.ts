import { Question, QuestionProps } from "./Question"
import { playProps, RoomProps } from "./Room"

export interface ProviderRoomProps {
	create(room: RoomProps, leader: string): Promise<void>
}

export class ProviderRoom {
	private _providerAuthentication: ProviderRoomProps

	constructor(provider: ProviderRoomProps) { this._providerAuthentication = provider }

	async create(room: RoomProps, leader: string): Promise<void> {
		await this._providerAuthentication.create(room, leader)
	}

}
