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
		<div className='flex w-full h-screen bg-rosa'>
			<div className='bg-background text-white hidden lg:flex flex-col items-center justify-center w-[50%] h-full gap-5'>
				<div className='p-10 bg-white bg-opacity-10 rounded-lg'>
					<Image src={girlLogin} alt="girl with heart" width={250} />
				</div>
				<p className='text-center text-xl w-[80%]'>Bem-vinda à Alerta Rosa, a plataforma que luta pela conscientização e prevenção da violência contra a mulher.</p>
			</div>

			<div className='w-full lg:w-1/2 h-[90%] lg:h-full flex flex-col bg-white justify-center items-center gap-5 text-roxo shadow-lg rounded-b-lg'>
				<Image src={Logotipo} alt="Logotipo" width={150} className='hidden lg:flex' />
				<Image src={Logotipo} alt="Logotipo" width={100} className='flex lg:hidden' />

				<p className='text-2xl text-center'>LOGIN</p>

				<form className='flex flex-col gap-3'>
					<div className='flex flex-col gap-2 items-center'>
						<div className='flex items-center bg-white pl-2 rounded-md gap-2 border border-roxo'>
							<EnvelopeSimpleOpen className='text-roxo' />
							<input
								className="h-10 border border-zinc-200 shadow-sm rounded text-black pl-2 focus:outline-none"
								type='string'
								placeholder='Email'
							/>
						</div>

						<div className='flex items-center bg-white pl-2 rounded-md gap-2 border border-roxo'>
							<LockSimple className='text-roxo' />
							<input
								className="h-10 border border-zinc-200 shadow-sm rounded text-black pl-2 focus:outline-none"
								type='password'
								placeholder='Senha'
							/>
						</div>
					</div>

					<div className='flex flex-col items-center justify-center gap-2'>
						<div className='flex underline text-xs justify-center lg:text-sm '>
							<Link href="/register">Criar conta</Link>
						</div>

						<button type='submit'
							className='bg-rosa text-white text-xl w-28 h-10 rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
							CRIAR
						</button>
					</div>
				</form>
			</div>

			{/* <div className='bg-gradient-to-b from-roxo to-rosa text-white flex flex-col justify-center items-center w-full lg:w-[50%] h-full gap-5'>
				<Image src={Logotipo} alt="Logotipo" width={150} />

				<p className='font-semibold text-xl text-center'>LOGIN</p>

				 <form className='flex flex-col p-2'>
					<div className='flex flex-col gap-2'>
						<div className='flex flex-col gap-10'>
							<Input type="text" value={email} valueChange={setEmail} icon={<EnvelopeSimpleOpen />} placeholder="Email" />
							<Input type="password" value={password} valueChange={setPassword} icon={<Key />} placeholder="Senha" />
						</div>

						<div className='flex underline text-xs lg:text-sm justify-between'>
							<Link href="/login">Esqueci minha senha</Link>
							<Link href="/register">Criar conta</Link>
						</div>
					</div>

					<button onClick={handleLoginSubmit} className='bg-white text-rosa p-2 mt-10 text-xl rounded-lg shadow-md lg:hover:opacity-90 transition-opacity'>
						ACESSAR
					</button>
				</form>		 
				</div> */}
		</div>
	)
}


