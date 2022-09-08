export interface playProps{
	email: string
	photo: string
	name: string
}

export interface RoomProps {
	id: string
	players: playProps[]
	playersLength: number
	leader: string
	title: string
	playing: boolean
}

export class Room {
	private _props: RoomProps

	constructor(props: RoomProps) { this._props = props }

	get id() { return this._props.id }
	get title() { return this._props.title }
	get players() { return this._props.players }
	get playing() { return this._props.playing }
	get leader() { return this._props.leader }
	get playersLength() { return this._props.playersLength }
}
