import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, updateDoc, where, } from "firebase/firestore"

import { db } from "../firebase/config"
import { ProviderRoomProps } from "../core/ProviderRoom"
import { playProps, RoomProps } from "../core/Room"

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

	async joinRoom(id: string, user: playProps): Promise<void> {
		const docRef = doc(db, 'rooms', id)
		const docSnap = await getDoc(docRef)
		const room: RoomProps = docSnap.data() as unknown as RoomProps

		await updateDoc(docRef, {
			players: [...room.players, user]
		})
	}

	async startGame(email: string): Promise<void> {
		const docRef = doc(db, 'rooms', email)

		await updateDoc(docRef, {
			playing: true
		})
	}
}
