import { createContext } from 'react'

import { ProviderRoom } from '../../core/ProviderRoom'
import { Question } from '../../core/Question'
import { Room, RoomProps } from '../../core/Room'
import UseAuth from '../hooks/useAuth'
import { RoomProvider } from '../../provider/RoomProvider'

interface RoomContextProps {
	create(room: RoomProps, leader: string): Promise<void>
	sign(id: string): Promise<any>
	handleAnswerQuestion(question: Question): Promise<void>
	result(): Promise<void>
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

	async function create(room: RoomProps, leader: string): Promise<void> {
		setLoading(true)
		await roomProvider.create(room, leader)
		setLoading(false)
	}

	async function sign(): Promise<number> {
		console.log('sign')
		return 0
	}

	async function handleAnswerQuestion(): Promise<void> {
		console.log('handleAnswerQuestion')
	}

	async function result(): Promise<void> {
		console.log('result')
	}

	return (
		<RoomContext.Provider value={{
			create,
			sign,
			handleAnswerQuestion,
			result
		}}>
			{props.children}
		</RoomContext.Provider>
	)
}

export default RoomContext
