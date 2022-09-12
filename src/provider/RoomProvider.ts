import { doc, setDoc, } from "firebase/firestore"

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
}
