import { collection, doc, getDocs, onSnapshot, query, setDoc, where, } from "firebase/firestore"

import { db } from "../firebase/config"
import { ProviderRoomProps } from "../core/ProviderRoom"
import { RoomProps } from "../core/Room"

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

	async getRoom(id: string): Promise<RoomProps> {
		let roomInicial: RoomProps = {
			id: '',
			leader: '',
			players: [],
			playersLength: 0,
			playing: false,
			title: ''
		}

		const q = query(collection(db, "rooms"), where("id", "==", id))

		const queryResult = await getDocs(q)

		queryResult.forEach((doc) => roomInicial = doc.data() as RoomProps)

		return roomInicial
	}
}
