import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { AuthProvider } from '../service/context/AuthContext'
import { RoomProviderContext } from '../service/context/RoomContext'

import '../styles/globals.css'
import { Loading } from '../components/Loading'

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
						<Component {...pageProps} />
					</RoomProviderContext>
				</Loading>
			</AuthProvider>
		</ChakraProvider>
	)
}

export default MyApp
