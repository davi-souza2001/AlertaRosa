import { createContext } from 'react'
import { ProviderRoom } from '../../core/ProviderRoom'
import { Question } from '../../core/Question'
import { Room } from '../../core/Room'
import UseAuth from '../hooks/useAuth'
import { RoomProvider } from '../../provider/RoomProvider'

interface RoomContextProps {
	create?(room: Room, leader: string): Promise<void>
	sign?(id: string): Promise<any>
	handleAnswerQuestion?(question: Question): Promise<void>
	result?(): Promise<void>
}

const RoomContext = createContext<RoomContextProps>({
	create: () => Promise.resolve(),
	sign: () => Promise.resolve(),
	handleAnswerQuestion: () => Promise.resolve(),
	result: () => Promise.resolve()
})

export function RoomProviderContext(props: any) {
	const { setLoading } = UseAuth()
	const roomProvider = new ProviderRoom(new RoomProvider())

	async function create(room: Room, leader: string): Promise<void> {
		setLoading(true)
		await roomProvider.create(room, leader)
		setLoading(false)
	}

	return (
		<RoomContext.Provider value={{
			create
		}}>
			{props.children}
		</RoomContext.Provider>
	)
}

export default RoomContext
