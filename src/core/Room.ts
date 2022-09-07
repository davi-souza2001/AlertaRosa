import { Question } from "./Question"

export interface RoomProps {
	id: string
	members: string[]
	leader: string
	questions: Question[]
	playing: boolean
}

export class Room {
	#id: string
	#members: string[]
	#questions: Question[]
	#playing: boolean
	#leader: string

	constructor(members: string[], questions: Question[], playing: boolean, leader: string) {
		this.#id = crypto.randomUUID()
		this.#members = members
		this.#leader = leader
		this.#questions = questions
		this.#playing = playing
	}

	get id() { return this.#id }
	get members() { return this.#members }
	get questions() { return this.#questions }
	get playing() { return this.#playing }
}
