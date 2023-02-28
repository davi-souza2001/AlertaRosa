import type { AppProps } from 'next/app'

import { AuthProvider } from '../service/context/AuthContext'
import { RoomProviderContext } from '../service/context/RoomContext'

import '../styles/globals.css'
import { Loading } from '../components/Loading'
import { TopBar } from '../components/TopBar'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Loading>
				<RoomProviderContext>
					<Component {...pageProps} />
				</RoomProviderContext>
			</Loading>
		</AuthProvider>
	)
}

export default MyApp
