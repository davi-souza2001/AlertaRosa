import { createContext, Dispatch, SetStateAction, useState } from 'react'

import { ProviderRoom } from '../../core/ProviderRoom'
import { RoomProps } from '../../core/Room'
import UseAuth from '../hooks/useAuth'
import { RoomProvider } from '../../provider/RoomProvider'

interface RoomContextProps {
	create(room: RoomProps, leader: string): Promise<void>
	getRoom(id: string): Promise<RoomProps>
}

const RoomContext = createContext<RoomContextProps>({
	create: () => Promise.resolve(),
	getRoom: (id) => Promise.resolve(id as unknown as RoomProps)
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

	return (
		<RoomContext.Provider value={{
			create,
			getRoom
		}}>
			{props.children}
		</RoomContext.Provider>
	)
}

export default RoomContext
