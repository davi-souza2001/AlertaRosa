import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore"

import { db } from "../firebase/config"
import { ProviderRoomProps } from "../core/ProviderRoom"
import { playProps, RoomProps } from "../core/Room"
import UseRoom from "../service/hooks/useRoom"

export class RoomProvider implements ProviderRoomProps {
	#setRoomRealTime: any = UseRoom().setRoomRealTime

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
		let roomFound: any

		const searchedRoom = query(collection(db, 'rooms'), where('id', '==', id))

		const resolveQuery = await getDocs(searchedRoom)

		resolveQuery.forEach((room) => roomFound = room.data())

		const roomReal = doc(db, 'rooms', 'davidgamerbr1333@gmail.com')

		onSnapshot(roomReal, (doc) => this.#setRoomRealTime(doc.data() as any))

		return roomFound
	}

	async enterPlayingTheRoom(player: playProps, id: string): Promise<void> {
		const searchedRoom = doc(db, 'rooms', id)

		const resolveQuery = await getDoc(searchedRoom)

		if (resolveQuery.exists()) {
			console.log("Document data:", resolveQuery.data())
			await updateDoc(searchedRoom, {
				players: [...resolveQuery.data().players, {
					email: player.email,
					photo: player.photo,
					name: player.name
				}]
			})
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
