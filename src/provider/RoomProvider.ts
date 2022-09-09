import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { ProviderRoomProps } from "../core/ProviderRoom"
import { playProps, RoomProps } from "../core/Room"
import { db } from "../firebase/config"

export class RoomProvider implements ProviderRoomProps {

	async create(room: RoomProps, leader: string): Promise<void> {
		await setDoc(doc(db, "rooms", leader), {
			id: room.id,
			players: room.players,
			playersLength: room.playersLength,
			title: room.title,
			leader,
			playing: room.playing
		})
	}

	async sign(id: string) {
		let roomFound

		const searchedRoom = query(collection(db, 'rooms'), where('id', '==', id))

		const resolveQuery = await getDocs(searchedRoom)

		resolveQuery.forEach((room) => roomFound = room.data())

		return roomFound
	}

	async enterPlayingTheRoom(player: playProps, id: string): Promise<void> {
		const searchedRoom = doc(db, 'rooms', id)

		const resolveQuery = await getDoc(searchedRoom)

		if (resolveQuery.exists()) {
			console.log("Document data:", resolveQuery.data());
		} else {
			console.log("No such document!");
		}
	}

	async handleAnswerQuestion(): Promise<void> {
		console.log('handleAnswerQuestion')
	}

	async result(): Promise<void> {
		console.log('result')
	}
}
