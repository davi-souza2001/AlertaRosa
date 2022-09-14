import { createContext, } from 'react'

import { ProviderRoom } from '../../core/ProviderRoom'
import { playProps, RoomProps } from '../../core/Room'
import UseAuth from '../hooks/useAuth'
import { RoomProvider } from '../../provider/RoomProvider'

interface RoomContextProps {
	create(room: RoomProps, leader: string): Promise<void>
	getRoom(id: string): Promise<RoomProps>
	joinRoom(id: string, user: playProps): Promise<void>
	startGame(email: string): Promise<void>
}

const RoomContext = createContext<RoomContextProps>({
	create: () => Promise.resolve(),
	getRoom: (id) => Promise.resolve(id as unknown as RoomProps),
	joinRoom: () => Promise.resolve(),
	startGame: () => Promise.resolve()
})

export function RoomProviderContext(props: any) {
	const { setLoading } = UseAuth()
	const roomProvider = new ProviderRoom(new RoomProvider())

	async function create(room: RoomProps, leader: string): Promise<void> {
		setLoading(true)
		await roomProvider.create(room, leader)
		setLoading(false)
	}

	async function getRoom(id: string): Promise<RoomProps> {
		setLoading(true)
		const room = await roomProvider.getRoom(id)
		setLoading(false)

		return room
	}

	async function joinRoom(id: string, user: playProps): Promise<void> {
		setLoading(true)
		await roomProvider.joinRoom(id, user)
		setLoading(false)
	}

	async function startGame(email: string): Promise<void> {
		setLoading(true)
		await roomProvider.startGame(email)
		setLoading(false)
	}

	return (
		<RoomContext.Provider value={{
			create,
			getRoom,
			joinRoom,
			startGame
		}}>
			{props.children}
		</RoomContext.Provider>
	)
}

export default RoomContext
