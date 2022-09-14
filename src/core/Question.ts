export interface QuestionProps {
	id: number
	enunciation: string
	answer: ResponseProps[]
}

export interface ResponseProps {
	id?: string
	value: string
	correct: boolean
}

export class Question {
	#id: string
	#enunciation: string
	#answer: ResponseProps[]

	constructor(enunciation: string, answer: ResponseProps[]) {
		this.#id = Math.floor(Date.now() * Math.random()).toString(36)
		this.#enunciation = enunciation
		this.#answer = answer
	}

	get id(): string {
		return this.#id
	}

	get enunciation(): string {
		return this.#enunciation
	}

	get answer(): ResponseProps[] {
		return this.#answer
	}

	respond(id: string) {
		const question: ResponseProps = this.#answer.find(question => question.id === id) as ResponseProps

		return question.correct
	}
}
