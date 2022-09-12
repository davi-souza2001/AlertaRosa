import { createContext, Dispatch, SetStateAction, useState } from 'react'

import { ProviderRoom } from '../../core/ProviderRoom'
import { RoomProps } from '../../core/Room'
import UseAuth from '../hooks/useAuth'
import { RoomProvider } from '../../provider/RoomProvider'

interface RoomContextProps {
	create(room: RoomProps, leader: string): Promise<void>
}

const RoomContext = createContext<RoomContextProps>({
	create: () => Promise.resolve()
})

export function RoomProviderContext(props: any) {
	const { setLoading } = UseAuth()
	const roomProvider = new ProviderRoom(new RoomProvider())

	async function create(room: RoomProps, leader: string): Promise<void> {
		setLoading(true)
		await roomProvider.create(room, leader)
		setLoading(false)
	}

	return (
		<RoomContext.Provider value={{
			create,
		}}>
			{props.children}
		</RoomContext.Provider>
	)
}

export default RoomContext
