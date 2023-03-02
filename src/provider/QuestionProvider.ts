import { addDoc, collection } from "firebase/firestore"
import { ProviderQuestionProps } from "../core/ProviderQuestion"

import { QuestionProps } from "../core/Question"
import { db } from "../firebase/config"

export class QuestionProvider implements ProviderQuestionProps {

	private questions: QuestionProps[] = [
		{
			id: 0,
			enunciation: 'A função fetch() do JavaScript serve para:',
			categorie: 'test',
			answer: [
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Percorrer cursores de consultas de banco de dados.',
				},
				{
					id: Math.floor(Date.now() * Math.random()).toString(36),
					value: 'Acessar e manipular partes do pipelina HTTP.',
				}
			]
		},
	]

	async create() {
		const questions = this.questions

		questions.map(async (question) => {
			await addDoc(collection(db, "questions"), question)
		})

		console.log('Submitted')
	}
}
