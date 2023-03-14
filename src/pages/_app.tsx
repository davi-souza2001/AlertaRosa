import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { AuthProvider } from '../service/context/AuthContext'
import { RoomProviderContext } from '../service/context/RoomContext'

import '../styles/globals.css'
import { Loading } from '../components/Loading'
import Background from '../components/Background'

function MyApp({ Component, pageProps }: AppProps) {
	const config = {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	}

	const theme = extendTheme({ config })

	return (
		<ChakraProvider theme={theme}>
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
