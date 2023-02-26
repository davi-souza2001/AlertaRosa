import { RoomProps, PlayerProps } from "./Room"

export interface ProviderRoomProps {
	create(room: RoomProps, player: PlayerProps): Promise<void>
}

export class ProviderRoom {
	private _providerRoom: ProviderRoomProps

	constructor(provider: ProviderRoomProps) { this._providerRoom = provider }

	async create(room: RoomProps, player: PlayerProps): Promise<void> {
		await this._providerRoom.create(room, player)
	}
}
