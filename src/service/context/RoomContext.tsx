import { createContext, } from 'react'

import { PlayerProps, RoomProps } from '../../core/Room'
import UseAuth from '../hooks/useAuth'

interface RoomContextProps {
	create(room: RoomProps, player: PlayerProps): Promise<void>
}

const RoomContext = createContext<RoomContextProps>({
	create: () => Promise.resolve(),
})

export function RoomProviderContext(props: any) {
	const { setLoading } = UseAuth()

	async function create(room: RoomProps): Promise<void> {
		setLoading(true)
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
