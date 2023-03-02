import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { ProviderRoomProps } from "../core/ProviderRoom"
import { QuestionProps } from "../core/Question"
import { RoomProps } from "../core/Room"
import { db } from "../firebase/config"

export class RoomProvider implements ProviderRoomProps {
	async create(room: RoomProps): Promise<void> {
		await setDoc(doc(db, 'rooms', `${room.player}-${room.caterogie}`), room)
	}

	async getQuestions(categorie: string): Promise<QuestionProps[]> {
		let questions: QuestionProps[] = []
		const questionsRef = collection(db, "questions")
		const q = query(questionsRef, where("categorie", "==", categorie))
		const querySnapshot = await getDocs(q)
		querySnapshot.forEach((doc) => questions = doc.data() as QuestionProps[])

		return questions
	}
}
