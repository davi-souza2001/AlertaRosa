import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { AuthProvider } from '../service/context/AuthContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</AuthProvider>
	)
}

export default MyApp
