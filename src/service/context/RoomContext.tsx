import { createContext, Dispatch, SetStateAction, useState } from 'react'

import { ProviderRoom } from '../../core/ProviderRoom'
import { RoomProps } from '../../core/Room'
import UseAuth from '../hooks/useAuth'
import { RoomProvider } from '../../provider/RoomProvider'

interface RoomContextProps {
	create(room: RoomProps, leader: string): Promise<void>
	roomRealTime: RoomProps
	setRoomRealTime: Dispatch<SetStateAction<RoomProps>>
}

const RoomContext = createContext<RoomContextProps>({
	create: () => Promise.resolve(),
	roomRealTime: {
		id: '',
		leader: '',
		players: [{
			email: '',
			name: '',
			photo: ''
		}],
		playersLength: 0,
		playing: false,
		title: ''
	},
	setRoomRealTime: () => ({
		id: '',
		leader: '',
		players: [{
			email: '',
			name: '',
			photo: ''
		}],
		playersLength: 0,
		playing: false,
		title: ''
	})
})

export function RoomProviderContext(props: any) {
	const { setLoading } = UseAuth()
	const roomProvider = new ProviderRoom(new RoomProvider())
	const [roomRealTime, setRoomRealTime] = useState<RoomProps>({
		id: '',
		leader: '',
		players: [{
			email: '',
			name: '',
			photo: ''
		}],
		playersLength: 0,
		playing: false,
		title: ''
	})

	async function create(room: RoomProps, leader: string): Promise<void> {
		setLoading(true)
		await roomProvider.create(room, leader)
		setLoading(false)
	}

	return (
		<RoomContext.Provider value={{
			create,
			roomRealTime,
			setRoomRealTime,
		}}>
			{props.children}
		</RoomContext.Provider>
	)
}

export default RoomContext
