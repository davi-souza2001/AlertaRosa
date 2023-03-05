export interface QuestionProps {
	id: number
	categorie: string
	enunciation: string
}

export class Question {
	#id: string
	#enunciation: string

	constructor(enunciation: string) {
		this.#id = Math.floor(Date.now() * Math.random()).toString(36)
		this.#enunciation = enunciation
	}

	get id(): string {
		return this.#id
	}

	get enunciation(): string {
		return this.#enunciation
	}
}
