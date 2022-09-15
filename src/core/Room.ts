import { QuestionProps } from "./Question"

export interface playProps {
	email: string
	photo: string
	name: string
	score: number
}

export interface RoomProps {
	id: string
	players: playProps[]
	playersLength: number
	leader: string
	title: string
	playing: boolean
	questionNumber: number
	question: QuestionProps
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
	get questionNumber() { return this._props.questionNumber }
	get QuestionProps() { return this._props.question }
}
