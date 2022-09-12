import { RoomProps } from "./Room"

export interface ProviderRoomProps {
	create(room: RoomProps, leader: string): Promise<void>
	getRoom(id: string): Promise<RoomProps>
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
}
