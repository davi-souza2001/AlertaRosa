import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeSimpleOpen, LockSimple } from 'phosphor-react'
import { useToast } from '@chakra-ui/react'

import Logotipo from '../../public/logotipo.svg'
import girlLogin from '../../public/girlLogin.svg'
import UseAuth from '../service/hooks/useAuth'

export default function Login() {
	const { loginPassword } = UseAuth()
	const toast = useToast()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function handleLoginSubmit() {
		if (email === '' || password === '') {
			toast({
				position: 'top-right',
				title: 'Algo deu errado!',
				description: 'Preencha todos os dados corretamente!',
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		} else {
			await loginPassword(email, password)
		}
	}

	return (
		<div className='flex w-full h-screen bg-background'>
			<div className='bg-background text-white hidden lg:flex flex-col items-center justify-center w-[50%] h-full gap-5'>
				<div className='p-10 bg-white bg-opacity-10 rounded-lg'>
					<Image src={girlLogin} alt="girl with heart" width={250} />
				</div>
				<p className='text-center text-xl w-[80%]'>Bem-vinda à Alerta Rosa, a plataforma que luta pela conscientização e prevenção da violência contra a mulher.</p>
			</div>

			<div className='w-full lg:w-1/2 h-[90%] lg:h-full flex flex-col bg-gradient-to-b from-roxo to-rosa justify-center items-center gap-5 text-roxo shadow-lg rounded-b-lg'>
				<Image src={Logotipo} alt="Logotipo" width={150} className='hidden lg:flex' />
				<Image src={Logotipo} alt="Logotipo" width={100} className='flex lg:hidden' />

				<p className='text-2xl text-center text-white'>LOGIN</p>

				<form className='flex flex-col gap-3' onSubmit={handleLoginSubmit}>
					<div className='flex flex-col gap-2 items-center'>
						<div className='flex items-center bg-white pl-2 rounded-md gap-2 border border-roxo'>
							<EnvelopeSimpleOpen className='text-roxo' />
							<input
								className="h-10 border border-zinc-200 bg-white shadow-sm rounded text-black pl-2 focus:outline-none"
								type='string'
								placeholder='Email'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className='flex items-center bg-white pl-2 rounded-md gap-2 border border-roxo'>
							<LockSimple className='text-roxo' />
							<input
								className="h-10 border border-zinc-200 bg-white shadow-sm rounded text-black pl-2 focus:outline-none"
								type='password'
								placeholder='Senha'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div className='flex flex-col items-center justify-center gap-2'>
						<div className='flex underline text-xs justify-center lg:text-sm text-white'>
							<Link href="/register">Criar conta</Link>
						</div>

						<button type='submit'
							className='bg-white text-rosa text-xl w-28 h-10 rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
							Entrar
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}


