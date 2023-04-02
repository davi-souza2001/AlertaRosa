import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { ProviderRoomProps } from "../core/ProviderRoom"
import { QuestionProps } from "../core/Question"
import { RoomProps } from "../core/Room"
import { User } from "../core/User"
import { db } from "../firebase/config"

export class RoomProvider implements ProviderRoomProps {
	async create(room: RoomProps): Promise<void> {
		await setDoc(doc(db, 'rooms', `${room.player}-${room.caterogie}`), room)
	}

	async sendResult(result: string, user: User): Promise<void> {
		await setDoc(doc(db, 'results', user.email),
			{
				result,
				email: user.email,
				name: user.name,
				city: user.city ?? '',
				state: user.state ?? '',
				phone: user.phone ?? ''
			}
		)
	}

	async getQuestions(): Promise<QuestionProps[]> {
		let questions: QuestionProps[] = []
		const questionsRef = collection(db, "questions")
		const querySnapshot = await getDocs(questionsRef)
		querySnapshot.forEach((doc) => {
			questions.push(doc.data() as QuestionProps)
		})

		return questions
	}
}
