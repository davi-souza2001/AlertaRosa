import { QuestionProps } from "./Question"

export interface RoomProps {
	player: string
	caterogie: string
	answers: string[]
}

export class Room {
	private _props: RoomProps

	constructor(props: RoomProps) { this._props = props }

	get player() { return this._props.player }
	get caterogie() { return this._props.caterogie }
	get answers() { return this._props.answers }
}
