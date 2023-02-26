import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { AuthProvider } from '../service/context/AuthContext'
import { RoomProviderContext } from '../service/context/RoomContext'

import '../styles/globals.css'
import { Loading } from '../components/Loading'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Loading>
				<RoomProviderContext>
					<ChakraProvider>
						<Component {...pageProps} />
					</ChakraProvider>
				</RoomProviderContext>
			</Loading>
		</AuthProvider>
	)
}

export default MyApp
