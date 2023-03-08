import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { AuthProvider } from '../service/context/AuthContext'
import { RoomProviderContext } from '../service/context/RoomContext'

import '../styles/globals.css'
import { Loading } from '../components/Loading'
import { TopBar } from '../components/TopBar'
import Background from '../components/Background'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<AuthProvider>
				<Loading>
					<RoomProviderContext>
						<Background>
							<Component {...pageProps} />
						</Background>
					</RoomProviderContext>
				</Loading>
			</AuthProvider>
		</ChakraProvider>
	)
}

export default MyApp
