import { QuestionProps } from "./Question"

export interface PlayerProps {
	name: string
	email: string
	photo: string
	xp: number
	score: number
}

export interface RoomProps {
	id: string
	title: string
	player: PlayerProps
	playing: boolean
	questionNumber: number
	question: QuestionProps
}

export class Room {
	private _props: RoomProps

	constructor(props: RoomProps) { this._props = props }

	get id() { return this._props.id }
	get title() { return this._props.title }
	get player() { return this._props.player }
	get playing() { return this._props.playing }
	get questionNumber() { return this._props.questionNumber }
	get QuestionProps() { return this._props.question }
}
