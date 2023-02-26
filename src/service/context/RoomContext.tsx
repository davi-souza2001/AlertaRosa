import { createContext, } from 'react'
import { ProviderRoom } from '../../core/ProviderRoom'

import { PlayerProps, RoomProps } from '../../core/Room'
import { RoomProvider } from '../../provider/RoomProvider'
import UseAuth from '../hooks/useAuth'

interface RoomContextProps {
	create(room: RoomProps, player: PlayerProps): Promise<void>
}

const RoomContext = createContext<RoomContextProps>({
	create: () => Promise.resolve(),
})

export function RoomProviderContext(props: any) {
	const { setLoading, user } = UseAuth()
	const roomProvider = new ProviderRoom(new RoomProvider())


	async function create(room: RoomProps): Promise<void> {
		setLoading(true)
		await roomProvider.create(room, {
			email: user.email,
			name: user.name,
			photo: user.photo,
			xp: user.xp,
			score: 0
		})
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
