import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { ProviderRoomProps } from "../core/ProviderRoom"
import { RoomProps } from "../core/Room"
import { db } from "../firebase/config"

export class RoomProvider implements ProviderRoomProps {

	async create(room: RoomProps, leader: string): Promise<void> {
		await addDoc(collection(db, "rooms"), {
			id: room.id,
			players: room.players,
			title: room.title,
			leader,
			playing: room.playing
		})
	}

	async sign(id: string): Promise<boolean> {
		const searchedRoom = query(collection(db, 'rooms'), where('id', '==', id))

		const resolveQuery = await getDocs(searchedRoom)

		return resolveQuery.empty
	}

	async handleAnswerQuestion(): Promise<void> {
		console.log('handleAnswerQuestion')
	}

	async result(): Promise<void> {
		console.log('result')
	}
}
