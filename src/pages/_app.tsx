import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { AuthProvider } from '../service/context/AuthContext'
import { RoomProviderContext } from '../service/context/RoomContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<RoomProviderContext>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</RoomProviderContext>
		</AuthProvider>
	)
}

export default MyApp
