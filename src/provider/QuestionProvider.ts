import { addDoc, collection } from "firebase/firestore"
import { ProviderQuestionProps } from "../core/ProviderQuestion"

import { QuestionProps } from "../core/Question"
import { db } from "../firebase/config"

export class QuestionProvider implements ProviderQuestionProps {

	private questions: QuestionProps[] = [
		{
			id: 0,
			enunciation: 'A função fetch() do JavaScript serve para:',
			categorie: 'test'
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
