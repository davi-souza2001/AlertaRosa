import { createContext, } from 'react'
import { ProviderQuestion } from '../../core/ProviderQuestion'
import { ProviderRoom } from '../../core/ProviderRoom'

import { RoomProps } from '../../core/Room'
import { QuestionProvider } from '../../provider/QuestionProvider'
import { RoomProvider } from '../../provider/RoomProvider'
import UseAuth from '../hooks/useAuth'

interface RoomContextProps {
	createRoom(room: RoomProps): Promise<void>
	sendQuestions(): Promise<void>
}

const RoomContext = createContext<RoomContextProps>({
	createRoom: () => Promise.resolve(),
	sendQuestions: () => Promise.resolve()
})

export function RoomProviderContext(props: any) {
	const { setLoading } = UseAuth()
	const roomProvider = new ProviderRoom(new RoomProvider())
	const questionProvider = new ProviderQuestion(new QuestionProvider())

	async function createRoom(room: RoomProps): Promise<void> {
		setLoading(true)
		await roomProvider.create(room)
		setLoading(false)
	}

	async function sendQuestions(): Promise<void> {
		await questionProvider.create()
	}

	return (
		<RoomContext.Provider value={{
			createRoom,
			sendQuestions
		}}>
			{props.children}
		</RoomContext.Provider>
	)
}

export default RoomContext
